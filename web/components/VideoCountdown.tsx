'use client'

import { useState, useEffect } from 'react'
import LessonVideoPlayer from './LessonVideoPlayer'
import { LockClosedIcon } from '@heroicons/react/24/solid'

interface VideoCountdownProps {
  targetDate: string
  playbackId: string | null
  lockedMessage: string
}

const calculateTimeLeft = (targetDate: string) => {
  const difference = +new Date(targetDate) - +new Date()
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  return timeLeft
}

export default function VideoCountdown({ targetDate, playbackId, lockedMessage }: VideoCountdownProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate))
  const [isExpired, setIsExpired] = useState(+new Date(targetDate) <= +new Date())

  useEffect(() => {
    if (isExpired) return

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate)
      setTimeLeft(newTimeLeft)

      if (Object.values(newTimeLeft).every((v) => v === 0)) {
        setIsExpired(true)
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate, isExpired])

  if (isExpired) {
    return playbackId ? <LessonVideoPlayer playbackId={playbackId} /> : null
  }

  return (
    <div className="mt-12 w-full max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl border border-gray-200 text-black text-center">
      <LockClosedIcon className="w-12 h-12 mx-auto text-gray-400 mb-4" />
      <h3 className="text-xl font-semibold mb-6 text-gray-800">{lockedMessage}</h3>
      <div className="flex justify-center gap-4 sm:gap-8 text-2xl sm:text-4xl font-mono">
        <div>
          <span className="font-bold">{String(timeLeft.days).padStart(2, '0')}</span>
          <div className="text-xs sm:text-sm font-sans uppercase tracking-wider text-gray-500">Days</div>
        </div>
        <div>
          <span className="font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
          <div className="text-xs sm:text-sm font-sans uppercase tracking-wider text-gray-500">Hours</div>
        </div>
        <div>
          <span className="font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <div className="text-xs sm:text-sm font-sans uppercase tracking-wider text-gray-500">Minutes</div>
        </div>
        <div>
          <span className="font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <div className="text-xs sm:text-sm font-sans uppercase tracking-wider text-gray-500">Seconds</div>
        </div>
      </div>
    </div>
  )
}
