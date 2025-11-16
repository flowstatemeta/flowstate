'use server'

import { sanityWriteClient } from '@/lib/sanity.server'
import { groq } from 'next-sanity'
import bcrypt from 'bcryptjs'

interface RegisterUserParams {
  name: string
  username: string
  email: string
  number: string
  password: string
  confirmPassword?: string
  questionnaireAnswers?: object;
  // In a real app, you would handle the password securely and not pass it around.
  // It would be sent directly to your auth provider.
}

export async function registerUser(formData: RegisterUserParams) {
  const { name, username, email, password, questionnaireAnswers } = formData

  if (!name || !username || !email || !password) {
    return { success: false, message: 'Missing required registration fields.' }
  }

  try {
    // --- Check if username already exists ---
    const existingUser = await sanityWriteClient.fetch(
      groq`*[_type == "user" && username == $username][0]`,
      { username }
    )
    if (existingUser) {
      return { success: false, message: 'Username is already taken. Please choose another.' }
    }
    // Hash the password for security
    const hashedPassword = await bcrypt.hash(password, 10)
    // Create the new user document
    const newUser = await sanityWriteClient.create({
      _type: 'user',
      name: name,
      username: username,
      email: email,
      hashedPassword: hashedPassword,
      questionnaireAnswers: JSON.stringify(questionnaireAnswers, null, 2),
    })
    return {
      success: true,
      message: 'Registration successful! Redirecting...',
      userId: newUser._id, // Return the new user ID for the next step
      redirect: '/privatehome',
    }
  } catch (error) {
    console.error('Error creating user in Sanity:', error)
    return { success: false, message: 'An unexpected error occurred during registration.' }
  }
}