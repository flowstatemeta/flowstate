'use server'

import { createClient } from 'next-sanity'
import { v4 as uuidv4 } from 'uuid' // You might need to install uuid or use a random string generator

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_TOKEN, // Ensure this is set in your .env.local with write permissions
  useCdn: false,
})

export async function markUserAsPending(referralCode: string, answers: Record<string, any>, explicitName?: string) {
  if (!process.env.SANITY_API_WRITE_TOKEN && !process.env.SANITY_API_TOKEN) {
    console.error('SANITY_API_WRITE_TOKEN is missing. Cannot perform write operations.')
    return { success: false, error: 'Server configuration error: Missing API Token' }
  }

  if (!referralCode) {
    return { success: false, error: 'Referral code is required' }
  }

  try {
    // 1. Find the referral code document
    const referral = await client.fetch(
      `*[_type == "referralCode" && code == $code][0]`,
      { code: referralCode }
    )

    if (!referral) {
      return { success: false, error: 'Invalid referral code' }
    }

    // 2. Try to extract Name, Phone, Email from answers for better readability in Studio
    // (Since keys are dynamic UUIDs, we use heuristics to guess which field is which)
    let derivedName = explicitName || 'New Lead'
    let derivedPhone = ''
    let derivedEmail = ''

    Object.values(answers).forEach((val: any) => {
      if (typeof val === 'string') {
        const v = val.trim()
        // Check for Email
        if (v.includes('@') && v.includes('.')) {
          derivedEmail = v
        }
        // Check for Phone (mostly digits/symbols, 7-15 chars)
        else if (/^[\d\+\-\s\(\)]{7,15}$/.test(v) && /\d/.test(v)) {
          derivedPhone = v
        }
        // Check for Name (letters/spaces, not too long, not a number)
        else if (!explicitName && /^[a-zA-Z\s]{2,50}$/.test(v) && !/\d/.test(v)) {
          if (derivedName === 'New Lead') derivedName = v
        }
      }
    })

    // 3. Create the User document
    const newUser = {
      _type: 'user',
      name: derivedName,
      email: derivedEmail,
      phoneNumber: derivedPhone,
      questionnaireAnswers: JSON.stringify(answers), // Save raw answers for the CSV export
      isPremium: false,
      createdAt: new Date().toISOString(),
      questionnaireCompletedAt: new Date().toISOString(),
    }

    const createdUser = await client.create(newUser)

    // 4. Link the new User to the Referral Code's pendingUsers array
    await client
      .patch(referral._id)
      .setIfMissing({ pendingUsers: [], pendingCount: 0 })
      .append('pendingUsers', [{ 
        _type: 'reference', 
        _ref: createdUser._id, 
        _key: Math.random().toString(36).substring(2, 15) // Generate a random key
      }])
      .inc({ pendingCount: 1 })
      .commit({ autoGenerateArrayKeys: true })

    return { success: true, userId: createdUser._id }
  } catch (error) {
    console.error('Error in markUserAsPending:', error)
    return { success: false, error: 'Failed to save data. Please try again.' }
  }
}