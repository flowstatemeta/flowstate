'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import VideoCountdown from './VideoCountdown'
import { ClipboardDocumentIcon, CheckIcon } from '@heroicons/react/24/outline'

interface PostQuestionnaireClientProps {
  heading: string
  description?: string
  buttonText?: string
  buttonLink?: string
  finalDescription?: string
  video?: {
    asset: {
      playbackId: string
    }
  }
  countdownTargetDate?: string
  videoLockedMessage?: string
  copyableMessage?: string
  copyButtonText?: string
  preCopyMessage?: string
}

export default function PostQuestionnaireClient(
  props: PostQuestionnaireClientProps
) {
  const {
    heading,
    description,
    buttonText,
    buttonLink,
    finalDescription,
    video,
    countdownTargetDate: globalTargetDate, // Renamed to avoid confusion
    videoLockedMessage,
    copyableMessage,
    copyButtonText,
    preCopyMessage,
  } = props

  const [individualTargetDate, setIndividualTargetDate] = useState<string | undefined>()
  const [isCopied, setIsCopied] = useState(false)
  const [isExpired, setIsExpired] = useState(false)

  const handleCopy = useCallback(() => {
    if (copyableMessage) {
      navigator.clipboard.writeText(copyableMessage).then(() => {
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 2000) // Reset after 2 seconds
      }).catch(err => {
        console.error('Failed to copy text: ', err)
      });
    }
  }, [copyableMessage])
  
  useEffect(() => {
    // On component mount, get the user's individual countdown from localStorage.
    const storedTarget = localStorage.getItem('countdown_target')
    const target = storedTarget || globalTargetDate

    if (target) {
      setIndividualTargetDate(target)

      // Check if the video access has expired (36 hours after unlock)
      const unlockTime = new Date(target).getTime()
      const expirationTime = unlockTime + (36 * 60 * 60 * 1000) // 36 hours
      if (Date.now() > expirationTime) {
        setIsExpired(true)
      }
    }
  }, [globalTargetDate])

  return (
      <main className="relative flex flex-col items-center justify-center flex-grow text-center px-4 pt-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            {heading}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-gray-700 leading-relaxed text-left ml-4">
              {description}
            </p>
          )}

          {/* Video Countdown Component */}
          {individualTargetDate && videoLockedMessage && !isExpired && (
            <VideoCountdown
              targetDate={individualTargetDate}
              playbackId={video?.asset?.playbackId || null}
              lockedMessage={videoLockedMessage}
            />
          )}

          {isExpired && (
            <div className="mt-10 p-6 bg-gray-100 rounded-lg border border-gray-300">
              <p className="text-gray-600 font-medium">The viewing period for this video has expired.</p>
            </div>
          )}

          {preCopyMessage && (
            <p className="mt-10 text-lg text-gray-700 leading-relaxed text-left ml-4 max-w-lg mx-auto w-full">
              {preCopyMessage}
            </p>
          )}

          {/* Copyable Message Section */}
          {copyableMessage && (
            <motion.div
              className={`${preCopyMessage ? 'mt-4' : 'mt-10'} w-full max-w-lg mx-auto`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative p-4 border-2 border-dashed border-gray-400 rounded-lg bg-white/50">
                <p className="text-gray-800 text-left ml-4 font-medium whitespace-pre-wrap">{copyableMessage}</p>
                {copyButtonText && (
                  <button
                    onClick={handleCopy}
                    className="absolute -top-4 -right-4 flex items-center gap-2 bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                  >
                    {isCopied ? (
                      <CheckIcon className="w-5 h-5 text-green-400" />
                    ) : (
                      <ClipboardDocumentIcon className="w-5 h-5" />
                    )}
                    {isCopied ? 'Copied!' : copyButtonText}
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {buttonText && buttonLink && (
            <div className="mt-10">
              <Link
                href={buttonLink}
                className="inline-block bg-black text-white font-bold py-4 px-12 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300 text-lg"
              >
                {buttonText}
              </Link>
            </div>
          )}
          {finalDescription && (
            <p className="mt-8 text-sm text-gray-600">{finalDescription}</p>
          )}
        </div>
      </main>
  )
}
