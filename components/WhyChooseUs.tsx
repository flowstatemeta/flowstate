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
            <div className={`${styles.donationCard} p-8 sm:p-10 md:p-12 lg:p-14 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] max-w-md mx-auto transition-transform duration-300 hover:-translate-y-2`}>
              {/* Envelope design lines */}
              <div className={styles.envelopeLineWrapper}>
                <div className={`${styles.envelopeLine} ${styles.envelopeLineLeft}`} />
                <div className={`${styles.envelopeLine} ${styles.envelopeLineRight}`} />
              </div>
              <div className={styles.starIcon}>
                {/* Star Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              </div>

              {callToActionTitle && (
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-5 relative z-10">{callToActionTitle}</h3>
              )}
              {callToActionDescription && (
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-md relative z-10">{callToActionDescription}</p>
              )}
              {buttonText && (
                <Link href={buttonLink || '#'}
                  className="relative z-10 mt-4 sm:mt-6 inline-block bg-black text-white font-bold py-3 px-8 sm:py-4 sm:px-12 rounded-lg sm:rounded-xl text-base sm:text-lg shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
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
