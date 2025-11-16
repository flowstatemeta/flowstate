'use server'

import { sanityWriteClient } from '@/lib/sanity.server'
import { groq } from 'next-sanity'

export async function markUserAsPaid(userId: string, referralCode: string) {
  if (!userId || !referralCode) {
    return { success: false, error: 'Missing user ID or referral code.' }
  }

  try {
    // 1. Find the referral code document ID
    const codeQuery = groq`*[_type == "referralCode" && code == $code][0]._id`
    const referralCodeId = await sanityWriteClient.fetch(codeQuery, { code: referralCode })

    if (!referralCodeId) {
      // This case is unlikely if the user was pending, but it's good practice to check.
      return { success: false, error: 'Referral code not found.' }
    }

    // 2. Atomically move the user from 'pendingUsers' to 'paidUsers'
    await sanityWriteClient
      .patch(referralCodeId)
      // Ensure the paidUsers array exists
      .setIfMissing({ paidUsers: [], pendingCount: 0, paidCount: 0 })
      // Remove the user from the pending array
      .unset([`pendingUsers[_ref=="${userId}"]`])
      // Add the user to the paid array
      .append('paidUsers', [{ _type: 'reference', _ref: userId }])
      // Decrement pending and increment paid counts
      .dec({ pendingCount: 1 })
      .inc({ paidCount: 1 })
      .commit({ autoGenerateArrayKeys: true })

    return { success: true }
  } catch (error) {
    console.error('Error marking user as paid:', error)
    return { success: false, error: 'An unexpected error occurred while updating referral status.' }
  }
}