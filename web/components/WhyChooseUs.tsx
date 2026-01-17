'use client'

import { motion, type Variants } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import styles from './WhyChooseUs.module.css'

export interface WhyChooseUsData {
  heading: string
  description?: string
  features: string[]
  callToActionTitle?: string
  callToActionDescription?: string
  buttonText?: string
  buttonLink?: string
}

export default function WhyChooseUs({ data }: { data: WhyChooseUsData }) {
  const {
    heading,
    description,
    features,
    callToActionTitle,
    callToActionDescription,
    buttonText,
    buttonLink,
  } = data
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }
  return (
    <section className="relative w-full py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#C1B59E] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Left Column: Heading and Description */}
        <motion.div
          className="max-w-xl lg:col-span-3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4 sm:mb-6">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            <motion.span
              className="inline-block cursor-pointer"
              style={{
                background: 'linear-gradient(90deg, #000000, #434343)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 100%',
              }}
              initial={{ backgroundPosition: '100% 0' }}
              whileHover={{
                scale: 1.02,
                backgroundPosition: '0% 0',
              }}
              transition={{
                duration: 0.4,
                ease: 'easeOut',
              }}
            >
              {description}
            </motion.span>
          </p>

          <motion.ul
            className="mt-8 space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {features?.map((feature, index) => (
              <motion.li key={index} className="flex items-start" variants={itemVariants}>
                <CheckCircleIcon className="h-6 w-6 text-black flex-shrink-0 mr-3 mt-1" />
                <span className="text-gray-800 text-lg">{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right Column: Donation Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full lg:col-span-2"
          style={{ perspective: 1000 }} // Adds 3D perspective for the rotation
        >
          {(callToActionTitle || callToActionDescription || buttonText) && (
            <div className={`${styles.donationCard} p-6 sm:p-10 md:p-12 lg:p-14 min-h-[280px] sm:min-h-[350px] md:min-h-[400px] max-w-md mx-auto transition-transform duration-300 hover:-translate-y-2`}>
              {/* Envelope design lines */}
              <div className={styles.envelopeLineWrapper}>
                <div className={`${styles.envelopeLine} ${styles.envelopeLineLeft}`} />
                <div className={`${styles.envelopeLine} ${styles.envelopeLineRight}`} />
              </div>

              {callToActionTitle && (
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-5 relative z-10">{callToActionTitle}</h3>
              )}
              {callToActionDescription && (
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-8 max-w-md relative z-10">{callToActionDescription}</p>
              )}
              {buttonText && (
                <Link href={buttonLink || '#'}
                  className="relative z-10 mt-4 sm:mt-6 inline-block bg-black text-white font-bold py-3 px-6 sm:py-4 sm:px-12 rounded-lg sm:rounded-xl text-base sm:text-lg shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  {buttonText} &rarr;
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
