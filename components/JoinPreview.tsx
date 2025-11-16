'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export interface JoinPreviewData {
  heading: string
  description?: string
  buttonText: string
  textBelowButton?: string
  signUpButtonText?: string
  signUpButtonLink?: string
  loginButtonText?: string
  loginButtonLink?: string
}

export default function JoinPreview({ data }: { data: JoinPreviewData }) {
  const { heading, description, buttonText, textBelowButton, signUpButtonText, signUpButtonLink, loginButtonText, loginButtonLink } = data
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here, e.g., send to an API
    console.log({ name, number })
    alert('Thank you for joining!')
    setName('')
    setNumber('')
  }

  return (
    <section className="w-full py-24 sm:py-32 bg-[#C1B59E]">
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">{heading}</h2>
          {description && (
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              {description}
            </p>
          )}
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-12 max-w-xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-8">
            <motion.input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              placeholder="Your Name"
              required
              className="block w-full rounded-md border-gray-300 py-4 px-5 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:col-span-2 text-black placeholder-black"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <motion.input
              type="tel"
              name="number"
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value.replace(/[^0-9]/g, ''))}
              autoComplete="tel"
              placeholder="Your Number"
              required
              pattern="[0-9]*"
              className="block w-full rounded-md border-gray-300 py-4 px-5 shadow-sm focus:border-gray-500 focus:ring-gray-500 text-black placeholder-black"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <div className="mt-8">
            <button type="submit" className="group relative w-full inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-gray-700 to-black px-12 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
              {buttonText}
            </button>
          </div>

          {textBelowButton && (
            <p className="mt-8 text-sm text-gray-500">{textBelowButton}</p>
          )}

          <div className="mt-6 flex justify-center gap-4">
            {signUpButtonText && signUpButtonLink && (
              <Link href={signUpButtonLink} className="rounded-md bg-gray-800 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 transition-colors">
                {signUpButtonText}
              </Link>
            )}
            {loginButtonText && loginButtonLink && (
              <Link href={loginButtonLink} className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 transition-colors">
                {loginButtonText} <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}