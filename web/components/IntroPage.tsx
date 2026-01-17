'use client'

import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'
import Link from 'next/link'

interface IntroPageData {
  _id: string
  heading: string
  heading2?: string
  description?: string[]
  backgroundImage: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  logo?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  logoTopLeft?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  buttonText: string
}

// Component to animate text word by word
const AnimatedWords = ({
  text,
  className,
  variants,
}: {
  text: string
  className?: string
  variants?: Variants
}) => {
  const wordContainerVariants: Variants = {
    hidden: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5,
      },
    },
  }

  const words = text.split(' ')
  const middleIndex = Math.floor(words.length / 2)

  const getWordVariants = (index: number): Variants => {
    const distanceFromCenter = index - middleIndex
    const isEven = words.length % 2 === 0
    const effectiveDistance = isEven && index >= middleIndex ? distanceFromCenter + 0.5 : distanceFromCenter

    return {
      hidden: { opacity: 0, y: 15 },
      visible: {
        opacity: 1,
        y: [15, 0],
        x: [0, 0, effectiveDistance * 20, 0],
        transition: {
          y: { duration: 0.6, ease: 'easeOut', delay: 2.5 + index * 0.1 },
          x: {
            duration: 4,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 2,
            delay: 2.5 + index * 0.1 + 0.6,
          },
        },
      },
    }
  }

  return (
    <motion.div className={className} variants={variants} initial="hidden" animate="visible">
      <motion.p variants={wordContainerVariants} initial="hidden" animate="visible">
        {words.map((word, index) => (
          <motion.span key={index} variants={getWordVariants(index)} style={{ display: 'inline-block', marginRight: '0.4em' }}>
            {word}
          </motion.span>
        ))}
      </motion.p>
    </motion.div>
  )
}

export function IntroPage({ data }: { data: IntroPageData }) {
  const {
    heading,
    heading2,
    description,
    backgroundImage,
    logoTopLeft,
    buttonText,
  } = data

  const [descriptionIndex, setDescriptionIndex] = useState(0)

  useEffect(() => {
    if (description && description.length > 1) {
      const interval = setInterval(() => {
        setDescriptionIndex((prevIndex) => (prevIndex + 1) % description.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [description])

  const descriptionVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 3.0 },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.5, ease: 'easeIn' } },
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 2.0,
        staggerChildren: 0.5,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: 'easeOut' },
    },
  }

  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1.0, ease: 'easeOut' },
    },
    spin: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 5,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {backgroundImage && (
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: [1.1, 1, 1.1], opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 2.5,
            ease: [0.22, 1, 0.36, 1],
            scale: { repeat: Infinity, duration: 40, ease: 'easeInOut' },
          }}
        >
          <Image
            src={urlFor(backgroundImage).url()}
            alt="Background"
            fill
            style={{ objectFit: 'cover' }}
            className="z-0"
            priority
          />
        </motion.div>
      )}

      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%)',
        }}
      ></div>

      <motion.div
        className="relative z-20 flex flex-col h-full text-white text-center p-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {logoTopLeft && (
          <motion.div
            className="absolute top-4 left-4 md:top-8 md:left-8"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileInView="spin"
            viewport={{ once: false }}
          >
            <div className="relative overflow-hidden">
              <Image
                src={urlFor(logoTopLeft).url()}
                alt="Top Left Logo"
                width={100}
                height={150}
                className="h-16 w-auto md:h-24"
              />
              <motion.div
                className="absolute top-0 -left-full w-full h-full z-10"
                style={{
                  background:
                    'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                }}
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: 'linear', delay: 3 }}
              />
            </div>
          </motion.div>
        )}

        <motion.div
          className="absolute top-4 right-4 md:top-8 md:right-8 text-right"
          variants={itemVariants}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 3.0 }}
          >
            {heading}
          </motion.h1>
        </motion.div>

        <div className="flex-grow flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            {heading2 ? (
              <AnimatedWords text={heading2} className="text-2xl md:text-4xl mb-8" variants={itemVariants} />
            ) : null}

            <motion.div variants={itemVariants}>
              <Link href="/home" className="bg-white text-black font-bold py-3 px-8 rounded-lg text-lg mb-8 block hover:bg-gray-200 transition-colors duration-300">
                {buttonText}
              </Link>
            </motion.div>
          </div>
        </div>

        {description && (
          <div className="pb-16 h-20 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={descriptionIndex}
                variants={descriptionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <p className="text-lg md:text-xl max-w-2xl mx-auto">{description[descriptionIndex]}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-black z-30"
        style={{ backgroundColor: 'black' }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, transitionEnd: { pointerEvents: 'none' } }}
        transition={{ duration: 2.0, delay: 0.5, ease: 'easeOut' }}
      />
    </div>
  )
}
