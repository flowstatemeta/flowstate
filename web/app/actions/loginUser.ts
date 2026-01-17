'use server'

import { client } from '../../sanity.client'
import { groq } from 'next-sanity'
import { redirect } from 'next/navigation'

interface LoginUserParams {
  username: string
  password: string
}

export async function loginUser(formData: LoginUserParams) {
  const { username, password } = formData

  // --- Step 1: Simulate authenticating the user ---
  // In a real app, you would use your authentication provider (e.g., NextAuth.js, Clerk)
  // to verify the username and password against your user store.
  // For this simulation, we'll check against a hardcoded value or a Sanity user document.

  // Example: Check if a user with this username exists in Sanity (for profile data)
  const userProfile = await client.fetch(
    groq`*[_type == "user" && username == $username][0]`,
    { username }
  );

  if (!userProfile) {
    return { success: false, message: 'Invalid username or password.' }
  }

  // In a real scenario, you would verify the password here (e.g., bcrypt.compare(password, userProfile.hashedPassword))
  // For now, we'll just assume any password is "valid" if the username exists.
  // If (password !== "your_secret_password") { return { success: false, message: 'Invalid username or password.' } }

  // --- Step 2: On successful login, redirect ---
  // The client-side will handle setting sessionStorage and then redirecting.
  return { success: true, message: 'Login successful!' }
}