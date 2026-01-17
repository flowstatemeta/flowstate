'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface VaultButton {
  label: string
  url: string
  _key: string
}

export default function VaultButtons({ buttons }: { buttons: VaultButton[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mx-auto mt-8">
      {buttons?.map((btn, index) => (
        <motion.div
          key={btn._key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.21, 0.47, 0.32, 0.98], // Custom spring-like ease
          }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href={btn.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-full px-6 py-4 min-h-[70px] overflow-hidden rounded-xl bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg border border-stone-200 hover:border-stone-400"
          >
            {/* Background Gradient Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            {/* Button Content */}
            <span className="relative z-10 text-xl font-bold text-gray-800 tracking-wide group-hover:text-black">
              {btn.label}
            </span>

            {/* Arrow Icon that appears on hover */}
            <span className="absolute right-4 opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-gray-400">
              →
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}