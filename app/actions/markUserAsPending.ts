'use server'

import { sanityWriteClient } from '@/lib/sanity.server'
import { groq } from 'next-sanity'

export async function markUserAsPending(
  referralCode: string,
  questionnaireAnswers: Record<string, any>
) {
  if (!referralCode || !questionnaireAnswers) {
    return { success: false, error: 'Missing referral code or answers.' }
  }

  try {
    // 1. Find the referral code document
    const codeQuery = groq`*[_type == "referralCode" && code == $code][0]._id`
    const referralCodeId = await sanityWriteClient.fetch(codeQuery, { code: referralCode })

    if (!referralCodeId) {
      return { success: false, error: 'Invalid referral code.' }
    }

    // 2. Increment the pendingCount for the referral code
    await sanityWriteClient
      .patch(referralCodeId)
      .setIfMissing({ pendingCount: 0 })
      .inc({ pendingCount: 1 })
      .commit()

    return { success: true }
  } catch (error) {
    console.error('Error marking user as pending:', error)
    return { success: false, error: 'An unexpected error occurred.' }
  }
}