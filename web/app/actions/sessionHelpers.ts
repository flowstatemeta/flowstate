'use server'

import { sanityClient } from '@/lib/sanity.server'

export async function rotateUserSession(userId: string) {
  // Generate a unique token for this session
  const newToken = crypto.randomUUID()
  
  // Update the user document in Sanity
  // This invalidates any previous sessions that don't match this token
  await sanityClient
    .patch(userId)
    .set({ sessionToken: newToken })
    .commit()
    
  return newToken
}

export async function validateUserSession(userId: string, sessionToken: string) {
  const user = await sanityClient.fetch(
    `*[_type == "user" && _id == $userId][0]{ sessionToken }`,
    { userId }
  )
  
  // If the token in the database matches the one in the session, it's valid
  return user?.sessionToken === sessionToken
}