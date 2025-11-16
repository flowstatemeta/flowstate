'use server'

import { sanityWriteClient } from '@/lib/sanity.server'

interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function submitContactForm(formData: ContactFormData) {
  const { name, email, message } = formData

  if (!name || !email || !message) {
    return { success: false, message: 'All fields are required.' }
  }

  try {
    // Create a new contact message document in Sanity
    const newMessage = await sanityWriteClient.create({
      _type: 'contactMessage',
      name: name,
      email: email,
      message: message,
    })

    return { success: true, message: 'Message sent successfully!' }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again.',
    }
  }
}
