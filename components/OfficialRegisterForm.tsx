'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { validateEmail } from '@/app/actions/validateEmail'
import { registerUser } from '@/app/actions/registerUser';
import { markUserAsPaid } from '@/app/actions/markUserAsPaid';

export interface OfficialRegisterPageData {
  heading: string
  description?: string
  namePlaceholder?: string
  usernamePlaceholder?: string
  emailPlaceholder?: string
  numberPlaceholder?: string
  passwordPlaceholder?: string
  confirmPasswordPlaceholder?: string
  buttonText?: string
}

export default function OfficialRegisterForm(
  props: OfficialRegisterPageData
) {
  const {
    heading,
    description,
    namePlaceholder,
    usernamePlaceholder,
    emailPlaceholder,
    numberPlaceholder,
    passwordPlaceholder,
    confirmPasswordPlaceholder,
    buttonText,
  } = props

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    number: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isEmailValidating, setIsEmailValidating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [questionnaireAnswers, setQuestionnaireAnswers] = useState<object | null>(null);

  useEffect(() => {
    // On component mount, retrieve the questionnaire answers from localStorage
    const savedAnswers = localStorage.getItem('questionnaire_answers');
    if (savedAnswers) {
      const parsedAnswers = JSON.parse(savedAnswers);
      setQuestionnaireAnswers(parsedAnswers);

      // Find the name from the answers and pre-fill the form.
      // This assumes the name is the first answer, which is a reasonable assumption
      // for a questionnaire flow.
      const nameFromAnswers = Object.values(parsedAnswers)[0] as string;
      if (nameFromAnswers) {
        setFormData((prev) => ({ ...prev, name: nameFromAnswers }));
      }
    }
  }, []);

  // Debounced email validation
  useEffect(() => {
    // Don't validate if the email is empty
    if (!formData.email) {
      setEmailError(null);
      return;
    }

    setIsEmailValidating(true);
    const handler = setTimeout(async () => {
      const result = await validateEmail(formData.email);
      if (!result.isValid) {
        setEmailError(result.message);
      } else {
        setEmailError(null);
      }
      setIsEmailValidating(false);
    }, 1000); // Wait 1 second after user stops typing

    return () => clearTimeout(handler);
  }, [formData.email]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'number' ? value.replace(/[^0-9]/g, '') : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true);

    // Validation
    if (!formData.name || !formData.username || !formData.email || !formData.number || !formData.password) {
      setError('All fields are required.')
      return
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long.')
      return
    }
    if (emailError) {
      setError('Please fix the errors before submitting.');
      return;
    }

    // Combine form data with questionnaire answers
    const submissionData = {
      ...formData,
      questionnaireAnswers: questionnaireAnswers ?? undefined,
    };
    const result = await registerUser(submissionData);

    if (result && result.success) {
      // Now, mark the user as paid for referral tracking using the newly created user ID
      const referralCode = localStorage.getItem('referral_code');
      if (result.userId && referralCode) {
        await markUserAsPaid(result.userId, referralCode);
      }

      setSuccessMessage(result.message || 'Registration successful! Redirecting...');
      // Redirect after a delay to show the success message
      setTimeout(() => {
        window.location.href = result.redirect || '/privatehome';
      }, 1500);
    } else {
      // Handle potential errors from the server action
      setError(result?.message || 'An unexpected error occurred.');
      setSuccessMessage(null);
      setIsSubmitting(false);
    }
  }

  return (
    <section className="relative flex flex-col items-center justify-center flex-grow text-center px-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          {heading}
        </h1>
        {description && (
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            {description}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <input
            type="text"
            name="name"
            placeholder={namePlaceholder || 'Your Name'}
            value={formData.name}
            onChange={handleChange}
            readOnly // The name is pre-filled from the questionnaire
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none text-black bg-gray-100 cursor-not-allowed"
          />
          <input
            type="text"
            name="username"
            placeholder={usernamePlaceholder || 'Username'}
            value={formData.username}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none text-black"
          />
          <div>
            <input
              type="email"
              name="email"
              placeholder={emailPlaceholder || 'Your Email'}
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none text-black"
            />
            {isEmailValidating && <p className="text-sm text-gray-500 mt-1">Validating email...</p>}
            {emailError && <p className="text-sm text-red-500 mt-1">{emailError}</p>}
          </div>
          <input
            type="tel"
            name="number"
            placeholder={numberPlaceholder || 'Your Number'}
            value={formData.number}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none text-black"
          />
          <input
            type="password"
            name="password"
            placeholder={passwordPlaceholder || 'Create a Password'}
            value={formData.password}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none text-black"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder={confirmPasswordPlaceholder || 'Confirm Your Password'}
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none text-black"
          />

          {error && <p className="text-red-500 font-semibold">{error}</p>}

          <motion.button
            type="submit"
            className="w-full bg-black text-white font-bold py-4 px-12 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {buttonText || 'Register'}
          </motion.button>
        </form>
        {successMessage && <p className="text-green-500 font-semibold mt-4">{successMessage}</p>}
      </div>
    </section>
  )
}