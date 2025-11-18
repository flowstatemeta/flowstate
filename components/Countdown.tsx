'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import MuxPlayer from '@mux/mux-player-react'
import { motion, AnimatePresence } from 'framer-motion'
import { validateReferral } from '@/app/actions/validateReferral' // Import the server action

export interface CountdownData {
  heading: string
  description?: string
  targetDate: string
  expiredMessage?: string
  videoHeading?: string
  videoDescription?: string
  video?: {
    asset: {
      playbackId: string
    }
  }
  referralDescription?: string
  referralInputPlaceholder?: string
  referralButtonText?: string
}

const getReturnValues = (countDown: number) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000)
  const isExpired = days + hours + minutes + seconds <= 0

  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
    isExpired,
  }
}

const AnimatedDigit = ({ value }: { value: string }) => {
  return (
    <div className="relative h-12 w-8 sm:h-16 sm:w-12 md:h-24 md:w-16 overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl md:text-7xl font-mono font-bold"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

export default function Countdown({ data }: { data: CountdownData }) {
  const {
    heading,
    description,
    targetDate,
    expiredMessage,
    video,
    videoHeading,
    videoDescription,
    referralDescription,
    referralInputPlaceholder,
    referralButtonText,
  } = data
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00', isExpired: false })

  const [referralCodeInput, setReferralCodeInput] = useState('')
  const [referralError, setReferralError] = useState<string | null>(null)
  const [isSubmittingReferral, setIsSubmittingReferral] = useState(false)
  useEffect(() => {
    setIsClient(true)
    const countDownDate = new Date(targetDate).getTime()

    const interval = setInterval(() => {
      setTimeLeft(getReturnValues(countDownDate - new Date().getTime()))
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  const handleReferralSubmit = async () => {
    setIsSubmittingReferral(true)
    setReferralError(null)

    const result = await validateReferral(referralCodeInput)

    if (result.valid) {
      localStorage.setItem('referral_cleared', 'true')
      localStorage.setItem('referral_code', referralCodeInput.toUpperCase())
      router.push('/questionnaire')
    } else {
      setReferralError(result.message)
    }
    setIsSubmittingReferral(false)
  }

  useEffect(() => {
    if (!isClient) return;
    if (localStorage.getItem('questionnaire_completed') === 'true') {
      router.push('/post-questionnaire');
    } else if (localStorage.getItem('referral_cleared') === 'true') {
      // If the user has already cleared the referral, redirect them to the questionnaire
      router.push('/questionnaire');
    }
  }, [isClient, router]);

  if (isClient && timeLeft.isExpired) {
    return (
      <section className="w-full py-24 sm:py-32 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold">{heading}</h2>
          <p className="mt-8 text-2xl text-gray-300">
            {expiredMessage || 'The event has started!'}
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-24 sm:py-32 bg-[#FFF8DC]">
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

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Stopwatch Body */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Buttons */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-end gap-2">
              <div className="w-4 h-6 bg-gray-300 rounded-t-sm" />
              <div className="w-8 h-10 bg-gray-400 rounded-t-md border-b-2 border-gray-500" />
              <div className="w-4 h-6 bg-gray-300 rounded-t-sm" />
            </div>

            {/* Face */}
            <div className="w-full h-full rounded-full bg-gray-200 shadow-2xl border-8 border-gray-300 flex flex-col items-center justify-center">
              {isClient && !timeLeft.isExpired && (
                <div className="flex items-center text-gray-800">
                  <TimeUnit value={timeLeft.days} label="Days" />
                  <Separator />
                  <TimeUnit value={timeLeft.hours} label="Hours" />
                  <Separator />
                  <TimeUnit value={timeLeft.minutes} label="Minutes" />
                  <Separator />
                  <TimeUnit value={timeLeft.seconds} label="Seconds" />
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Video Section */}
        {video?.asset?.playbackId && (
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {videoHeading && (
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{videoHeading}</h3>
            )}
            {videoDescription && (
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">{videoDescription}</p>
            )}
            <div className="mt-8 aspect-video w-full max-w-3xl mx-auto overflow-hidden shadow-2xl border-4 border-gray-300">
              {/* @ts-ignore */}
              <MuxPlayer streamType="on-demand" playbackId={video.asset.playbackId} controls className="w-full h-full" />
            </div>
          </motion.div>
        )}

        {/* Referral Code Section */}
        {(referralDescription || referralInputPlaceholder || referralButtonText) && (
          <motion.div
            className="mt-16 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {referralDescription && (
              <p className="max-w-xl mx-auto text-md text-gray-600 mb-6">
                {referralDescription}
              </p>
            )}
            {referralError && <p className="text-red-500 text-sm mb-4">{referralError}</p>}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
              <textarea
                placeholder={referralInputPlaceholder || 'Enter your code...'}
                rows={1}
                value={referralCodeInput}
                onChange={(e) => setReferralCodeInput(e.target.value)}
                className="w-full flex-grow resize-none rounded-lg border-gray-300 py-3 px-4 shadow-sm focus:border-gray-500 focus:ring-gray-500 text-black placeholder-gray-500 text-center"
              />
              <motion.button
                type="button"
                onClick={handleReferralSubmit}
                className="w-full sm:w-auto bg-black text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmittingReferral}
              >
                {isSubmittingReferral ? 'Validating...' : (referralButtonText || 'Submit')}
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

const TimeUnit = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center w-16 sm:w-24 md:w-32">
    <div className="flex">
      {value.split('').map((digit, i) => (
        <AnimatedDigit key={`${label}-${i}`} value={digit} />
      ))}
    </div>
    <span className="mt-1 text-xs text-gray-500 uppercase tracking-widest">
      {label}
    </span>
  </div>
)

const Separator = () => (
  <div className="flex flex-col items-center w-4 md:w-6">
    <span className="text-3xl sm:text-4xl md:text-7xl font-mono font-bold">:</span>
  </div>
)