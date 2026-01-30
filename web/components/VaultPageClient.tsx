'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import VaultButtons from '@/components/VaultButtons'
import { ArrowUpIcon } from '@heroicons/react/24/solid'

interface VaultButtonData {
  label: string
  url: string
  _key: string
}

interface VaultData {
  title: string
  description: string
  buttons: VaultButtonData[]
}

export default function VaultPageClient({ data }: { data: VaultData }) {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: '#FFF8DC' }}>
      <main className="max-w-4xl mx-auto p-6 md:p-12 pt-12">
        <div className="flex flex-col gap-8 ">
          {/* Back Button */}
          <div className="flex justify-start">
            <Link href="/privatehome" className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-gray-700 to-black px-6 py-2 text-sm font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
              &larr; Back to Private Home
            </Link>
          </div>

          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">{data.title}</h1>
            {data.description && (
              <p className="text-lg text-black max-w-2xl mx-auto">
                {data.description}
              </p>
            )}
          </div>

          {/* Animated Buttons Grid */}
          <VaultButtons buttons={data.buttons} />
        </div>
      </main>

      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-black text-white rounded-full p-3 shadow-lg hover:bg-gray-800 transition-colors z-50"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUpIcon className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}