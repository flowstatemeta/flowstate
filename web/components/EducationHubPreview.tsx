'use client'

import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'
import { motion, type Variants, useAnimation } from 'framer-motion'
import {
  BookOpenIcon,
  BeakerIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  CalculatorIcon,
} from '@heroicons/react/24/outline'

const iconMap: { [key: string]: React.ElementType } = {
  book: BookOpenIcon,
  science: BeakerIcon,
  art: PaintBrushIcon,
  code: CodeBracketIcon,
  business: BriefcaseIcon,
  math: CalculatorIcon,
}

export interface HubItemData {
  _key: string
  icon: string
  title: string
}

export interface EducationHubPreviewData {
  heading: string
  description?: string
  hubItems: HubItemData[]
  buttonText?: string
  buttonLink?: string
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

function HubItem({ item, index, isPaused }: { item: HubItemData; index: number; isPaused: boolean }) {
  const Icon = iconMap[item.icon]

  return (
    <div key={item._key} className="p-2 sm:p-4">
      <motion.div
        className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow-sm w-64"
        variants={itemVariants}
        whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
        animate={{
          x: [0, (index % 2 === 0 ? -1 : 1) * 15, 0],
        }}
        transition={{
          x: {
            duration: 4,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: index * 0.2,
            repeatType: isPaused ? 'reverse' : 'loop',
          },
        }}
      >
        <div className="flex-shrink-0 mb-4 sm:mb-6 p-3 sm:p-4 rounded-full bg-gray-200">
          {Icon && <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-gray-800" />}
        </div>
        <h3 className="text-base sm:text-xl font-bold text-gray-900">{item.title}</h3>
      </motion.div>
    </div>
  )
}

export default function EducationHubPreview({
  data,
}: {
  data: EducationHubPreviewData
}) {
  const { heading, description, hubItems, buttonText, buttonLink } = data
  const sectionRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = section.offsetWidth
      canvas.height = section.offsetHeight
    }

    const mathSymbols = ['+', '−', '×', '÷', '=', '∑', '∫', '√', '∞', 'π']

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      symbol: string
      size: number

      constructor(x: number, y: number, vx: number, vy: number) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.size = Math.random() * 12 + 8
        this.symbol = mathSymbols[Math.floor(Math.random() * mathSymbols.length)]
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.font = `${this.size}px sans-serif`
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'
        ctx.fillText(this.symbol, this.x, this.y)
      }

      update(canvas: HTMLCanvasElement) {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }
    }

    const particles: Particle[] = []

    const initializeParticles = () => {
      particles.length = 0 // Clear existing particles
      const particleCount = Math.floor((canvas.width * canvas.height) / 25000)
      for (let i = 0; i < particleCount; i++) {
        particles.push(
          new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            (Math.random() - 0.5) * 0.3,
            (Math.random() - 0.5) * 0.3,
          ),
        )
      }
    }

    const connect = (ctx: CanvasRenderingContext2D) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt(
            (particles[i].x - particles[j].x) ** 2 +
              (particles[i].y - particles[j].y) ** 2,
          )
          if (distance < 150) {
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.5 - distance / 300})`
            ctx.lineWidth = 0.3
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = (ctx: CanvasRenderingContext2D) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.update(canvas)
        p.draw(ctx)
      })
      connect(ctx)
      animationFrameId = requestAnimationFrame(() => animate(ctx))
    }

    const handleResize = () => {
      resizeCanvas()
      initializeParticles()
    }

    // Initial setup
    handleResize()
    animate(ctx)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          className="pt-8 sm:pt-12" // Added responsive top padding
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            {heading}
          </h2>
          {description && (
            <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-12"
          style={{ marginTop: '3rem' }} // Adjusted for responsiveness
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {hubItems?.map((item, i) => (
            <motion.div
              key={item._key}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <HubItem item={item} index={i} isPaused={hoveredIndex !== null && hoveredIndex !== i} />
            </motion.div>
          ))}
        </motion.div>

        {buttonText && buttonLink && (
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} // Adjusted for responsiveness
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          >
            <Link
              href={buttonLink}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-gray-700 to-black px-8 py-3 text-base sm:px-12 sm:py-4 sm:text-lg font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              {buttonText} &rarr;
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
