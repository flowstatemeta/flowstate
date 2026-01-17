'use client'

import { motion, Variants } from 'framer-motion'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export interface PrivateHeroData {
  heading: string
  description?: string
  fallbackName?: string
  buttonText?: string
  buttonLink?: string
  backgroundImage: {
    asset: {
      _ref: string
    }
  }
}

export default function PrivateHeroClient({ data }: { data: PrivateHeroData }) {
  const { data: session, status } = useSession()

  // Determine the display name, with fallbacks
  const displayName = session?.user?.name || data.fallbackName || 'Student'
  const isLoading = status === 'loading'
  const isLoggedIn = !!session?.user?.name

  // Animation variants for the name container
  const nameContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  }

  // Animation variants for each letter of the name
  const letterVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.5,
      },
    },
  }

  return (
    <>
      <motion.h1
        style={{
          backgroundImage:
            'linear-gradient(110deg, #e2e8f0 20%, #94a3b8 40%, rgba(0,0,0,0.4) 50%, #94a3b8 60%, #e2e8f0 80%)',
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: ['200% center', '-200% center'] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent drop-shadow-lg"
      >
        {isLoading ? (
          `${data.heading}...`
        ) : (
          <>
            {`${data.heading} `}
            {isLoggedIn ? (
              <motion.span
                className="inline-block"
                variants={nameContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {displayName.split('').map((char, index) => (
                  <motion.span
                    className="inline-block" // Add inline-block for transforms to work
                    key={index}
                    variants={letterVariants}
                    transition={{
                      // This transition is for the 'visible' state
                      ease: 'easeOut',
                      duration: 0.5,
                      // Add a transition for the infinite animation
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        delay: 1 + index * 0.1, // Stagger the infinite animation start
                      },
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.span>
            ) : (
              <span>{displayName}</span>
            )}
          </>
        )}
      </motion.h1>
      {data.description && (
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl drop-shadow-md">
          {data.description}
        </p>
      )}
      {data.buttonText && data.buttonLink && (
        <div className="mt-8">
          <Link
            href={data.buttonLink}
            className="inline-block bg-white text-black font-bold py-3 px-10 rounded-lg shadow-lg hover:bg-gray-200 transition-transform duration-300 transform hover:scale-105 text-lg"
          >
            {data.buttonText}
          </Link>
        </div>
      )}
    </>
  )
}
