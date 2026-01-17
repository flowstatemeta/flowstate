'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

export interface EnterHubData {
  heading?: string
  description?: string
  buttonText?: string
  buttonLink?: string
}

export default function EnterHub({ data }: { data: EnterHubData }) {
  const { heading, description, buttonText, buttonLink } = data
  const { status } = useSession()
  const isLoggedIn = status === 'authenticated'

  if (!heading && !description && !buttonText) {
    return null
  }

  // If the user is logged in, the button goes straight to the hub.
  // Otherwise, it goes to the login form as before.
  const dynamicButtonLink = isLoggedIn ? '/Education' : `${buttonLink}&showLogin=true`;

  return (
    <section className="w-full py-16 sm:py-24" style={{ backgroundColor: '#FFF8DC' }}>
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {heading && <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">{heading}</h2>}
          {description && <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">{description}</p>}
        </motion.div>
        {buttonText && buttonLink && (
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <motion.div
              className="inline-block"
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Link href={dynamicButtonLink} className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-black px-8 py-3 text-base sm:px-12 sm:py-4 sm:text-lg font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                <span className="relative">{buttonText}</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}