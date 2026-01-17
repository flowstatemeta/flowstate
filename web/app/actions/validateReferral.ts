'use server'

import { client } from '../../sanity.client'
import { revalidatePath } from 'next/cache'
import { groq } from 'next-sanity'

const referralCodeQuery = groq`*[_type == "referralCode" && code == $code && isActive == true][0]`

export async function validateReferral(code: string | undefined) {
  if (!code) {
    return { valid: false, message: 'Please enter a referral code.' }
  }

  try {
    const referral = await client.fetch(referralCodeQuery, { code: code.toUpperCase() })

    if (!referral) {
      return { valid: false, message: 'Invalid referral code.' }
    }

    revalidatePath('/signup')
    return { valid: true, message: 'Referral code accepted!' }
  } catch (error) {
    console.error('Error validating referral code:', error)
    return { valid: false, message: 'An error occurred. Please try again.' }
  }
}