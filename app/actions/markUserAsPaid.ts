'use server'

import { createClient } from 'next-sanity'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_TOKEN,
  useCdn: false,
})

export async function markUserAsPaid(referralCode: string, userData: { name: string; email: string; phoneNumber?: string }, questionnaireAnswers?: any, pendingUserId?: string) {
  if (!process.env.SANITY_API_WRITE_TOKEN && !process.env.SANITY_API_TOKEN) {
    console.error('SANITY_API_WRITE_TOKEN is missing. Cannot perform write operations.')
    return { success: false, error: 'Server configuration error: Missing API Token' }
  }

  if (!referralCode) return { success: false, error: 'Referral code is required' }

  try {
    // 1. Find the referral code document
    const referral = await client.fetch(`*[_type == "referralCode" && code == $code][0]`, { code: referralCode })
    
    if (!referral) {
      // If code is invalid, we might still want to register the user, just not link them.
      // But for this logic, we return error or handle gracefully.
      return { success: false, error: 'Invalid referral code' }
    }

    // 2. Check if user already exists (by ID first, then email) to avoid duplicates.
    let existingUser = null
    if (pendingUserId) {
      existingUser = await client.fetch(`*[_type == "user" && _id == $id][0]`, { id: pendingUserId })
    }
    if (!existingUser) {
      existingUser = await client.fetch(`*[_type == "user" && email == $email][0]`, { email: userData.email })
    }

    let userId = existingUser?._id

    if (existingUser) {
      // Update existing user to premium
      await client.patch(existingUser._id).set({ isPremium: true, ...userData, registeredAt: new Date().toISOString() }).commit()
    } else {
      // Create new user if they skipped the questionnaire or used a different email
      const newUser = await client.create({
        _type: 'user',
        ...userData,
        isPremium: true,
        questionnaireAnswers: questionnaireAnswers ? JSON.stringify(questionnaireAnswers) : undefined,
        createdAt: new Date().toISOString(),
        registeredAt: new Date().toISOString(),
      })
      userId = newUser._id
    }

    // Check if the user is currently in the pending list
    const isPending = referral.pendingUsers?.some((ref: any) => ref._ref === userId)

    // 3. Link User to the Referral Code's "paidUsers" list
    let patch = client
      .patch(referral._id)
      .setIfMissing({ paidUsers: [], paidCount: 0 })
      .append('paidUsers', [{ 
        _type: 'reference', 
        _ref: userId,
        _key: Math.random().toString(36).substring(2, 15)
      }])
      .inc({ paidCount: 1 })

    // If they were pending, remove them from pending list and decrement count
    if (isPending) {
      patch = patch
        .unset([`pendingUsers[_ref == "${userId}"]`])
        .dec({ pendingCount: 1 })
    }

    await patch.commit({ autoGenerateArrayKeys: true })

    return { success: true }
  } catch (error) {
    console.error('Error in markUserAsPaid:', error)
    return { success: false, error: 'Failed to register paid user' }
  }
}