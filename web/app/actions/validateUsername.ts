'use server'

import { client } from '@/sanity.client'
import { groq } from 'next-sanity'

export async function validateUsername(username: string) {
  try {
    // Check if a user with this username already exists
    const query = groq`*[_type == "user" && username == $username][0]`
    const user = await client.fetch(query, { username })

    if (user) {
      return { isValid: false, message: 'This username is already taken.' }
    }

    return { isValid: true }
  } catch (error) {
    console.error('Username validation error:', error)
    return { isValid: true } // Fail open to avoid blocking registration on API error
  }
}