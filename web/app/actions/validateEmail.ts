'use server'

export async function validateEmail(email: string): Promise<{ isValid: boolean; message: string }> {
  if (!email) {
    return { isValid: false, message: 'Email is required.' }
  }

  // Basic format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { isValid: false, message: 'Please enter a valid email format.' }
  }

  const apiKey = process.env.EMAIL_VALIDATION_API_KEY
  if (!apiKey) {
    console.warn('Email validation API key is not set. Skipping real-time check.')
    // If no API key is set, we'll just accept the format as valid.
    return { isValid: true, message: '' }
  }

  try {
    const response = await fetch(`https://emailreputation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`)
    const data = await response.json();

    // The Email Reputation API uses a 'quality_score'. We'll consider > 0.7 as valid.
    // It also returns an error object if the key is invalid.
    if (data.error) {
      console.error('Email validation API error:', data.error.message);
      return { isValid: false, message: 'Could not validate email. API error.' };
    }

    if (data.email_quality?.score && parseFloat(data.email_quality.score) > 0.7) {
      return { isValid: true, message: '' }
    } else {
      return { isValid: false, message: 'This email address does not appear to exist.' }
    }
  } catch (error) {
    console.error('Email validation API error:', error)
    // In case of an API error, we'll default to allowing the submission to proceed.
    return { isValid: true, message: '' }
  }
}