'use client'

import { useState, useEffect } from 'react'
import { markUserAsPending } from '@/app/actions/markUserAsPending'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { useRouter } from 'next/navigation'

// --- TypeScript Interfaces ---
// These should match the structure of your Sanity schemas

interface NamePage {
  _type: 'namePage'
  _key: string
  heading: string
  description?: string
}

interface NumberPage {
  _type: 'numberPage'
  _key: string
  heading: string
  description?: string
}

interface QuestionPage {
  _type: 'questionPage'
  _key: string
  question: string
  description?: string
  options: string[]
}

type QuestionnairePageData = NamePage | NumberPage | QuestionPage

export interface QuestionnaireData {
  title: string
  pages: QuestionnairePageData[]
}

// --- Animation Variants ---

const pageVariants: Variants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? '100%' : '-100%',
  }),
  visible: {
    opacity: 1,
    x: '0%',
    transition: { type: 'spring', stiffness: 250, damping: 30 },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction < 0 ? '100%' : '-100%',
    transition: { duration: 0.3 },
  }),
}

// --- Main Component ---

export default function QuestionnaireForm({ data }: { data: QuestionnaireData }) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: any }>({})
  const [direction, setDirection] = useState(1) // 1 for next, -1 for back
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isVerified, setIsVerified] = useState(false) // To prevent content flash
  const router = useRouter()

  const currentPage = data.pages[currentPageIndex]
  const isFirstPage = currentPageIndex === 0
  const isLastPage = currentPageIndex === data.pages.length - 1

  useEffect(() => {
    // On component mount, check if the user has cleared the referral step.
    if (localStorage.getItem('referral_cleared') !== 'true') {
      // If not, redirect them back to the signup page to enter a code.
      router.push('/signup')
    } else {
      // If they are verified, allow the component to render.
      setIsVerified(true)
    }
  }, [router])

  const handleNext = async () => {
    if (!isLastPage) {
      // --- Validation Logic ---
      if (currentPage._type === 'namePage' || currentPage._type === 'numberPage') {
        const currentAnswer = answers[currentPage._key]
        if (!currentAnswer || currentAnswer.trim() === '') {
          setError('This field cannot be empty.')
          return // Stop execution
        }
      }
      setError(null) // Clear error if validation passes

      setDirection(1)
      setCurrentPageIndex(currentPageIndex + 1)
    } else {
      setIsSubmitting(true)
      setError(null)

      const referralCode = localStorage.getItem('referral_code')
      if (!referralCode) {
        setError('Referral code not found. Please go back and enter a code.')
        setIsSubmitting(false)
        return
      }

      const result = await markUserAsPending(referralCode, answers)

      if (result.success) {
        // Save answers to localStorage to be picked up by the registration form
        localStorage.setItem('questionnaire_answers', JSON.stringify(answers));
        // Mark the questionnaire as completed so the user never sees it again.
        localStorage.setItem('questionnaire_completed', 'true')
        // Set the individual countdown timer. Let's set it for 72 hours from now.
        const countdownDuration = 72 * 60 * 60 * 1000 // 72 hours in milliseconds
        const targetDate = new Date(Date.now() + countdownDuration)
        localStorage.setItem('countdown_target', targetDate.toISOString())

        router.push('/post-questionnaire')
      } else {
        setError(result.error || 'An error occurred during submission.')
        setIsSubmitting(false)
      }
    }
  }

  const handleBack = () => {
    if (!isFirstPage) {
      setDirection(-1)
      setCurrentPageIndex(currentPageIndex - 1)
    }
  }

  const handleAnswerChange = (pageKey: string, value: any) => {
    setAnswers((prev) => ({ ...prev, [pageKey]: value }))
  }

  const renderPage = (page: QuestionnairePageData) => {
    switch (page._type) {
      case 'namePage':
        return (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">{page.heading}</h2>
            {page.description && <p className="mt-4 text-gray-600">{page.description}</p>}
            <div className="mt-8 space-y-6 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Your Name"
                value={answers[page._key] || ''}
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none text-black"
                onChange={(e) => handleAnswerChange(page._key, e.target.value)}
              />
            </div>
          </div>
        )
      case 'numberPage':
        return (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">{page.heading}</h2>
            {page.description && <p className="mt-4 text-gray-600">{page.description}</p>}
            <div className="mt-8 space-y-6 max-w-md mx-auto">
              <input
                type="tel"
                placeholder="Your Number"
                value={answers[page._key] || ''}
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none text-black"
                onChange={(e) => handleAnswerChange(page._key, e.target.value.replace(/[^0-9]/g, ''))}
              />
            </div>
          </div>
        )
      case 'questionPage':
        return (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">{page.question}</h2>
            {page.description && <p className="mt-4 text-gray-600">{page.description}</p>}
            <div className="mt-8 grid grid-cols-1 gap-4 max-w-md mx-auto">
              {page.options.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    handleAnswerChange(page._key, option)
                    if (!isLastPage) {
                      handleNext() // Automatically go to next question, unless it's the last one
                    }
                  }}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    answers[page._key] === option
                      ? 'bg-gray-800 text-white border-gray-800'
                      : 'bg-white text-gray-800 border-gray-300 hover:border-gray-500 hover:bg-gray-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  if (!isVerified) {
    // Render nothing or a loading spinner while the check is performed.
    return null
  }

  return (
    <section className="relative flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="w-full max-w-3xl">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPageIndex}
            custom={direction}
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full"
          >
            {renderPage(currentPage)}
          </motion.div>
        </AnimatePresence>

        {/* Error Message Display */}
        {error && <p className="text-center text-black font-semibold mt-4">{error}</p>}

        {/* Navigation Buttons */}
        <div className="mt-12 flex justify-between items-center max-w-2xl mx-auto">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className={`px-6 py-2 font-semibold rounded-lg transition-opacity ${
              isFirstPage ? 'opacity-0 cursor-default' : 'opacity-100 bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            disabled={isFirstPage}
          >
            Back
          </button>

          {/* Progress Indicator */}
          <span className="text-sm text-gray-500">
            {currentPageIndex + 1} / {data.pages.length}
          </span>

          {/* Next/Submit Button */}
          {(currentPage._type === 'namePage' ||
            currentPage._type === 'numberPage' ||
            (isLastPage && answers[currentPage._key])) && ( // Show on last page only after an answer is selected
            <button
              onClick={handleNext}
              className="px-6 py-2 font-semibold rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors disabled:bg-gray-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : isLastPage ? 'Submit' : 'Next'}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
