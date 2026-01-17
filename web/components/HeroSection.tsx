'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import { urlFor } from '@/lib/sanity.image'

export interface HeroSectionData {
  heading: string
  description?: string
  buttonText?: string
  buttonLink?: string
  backgroundImage?: {
    asset: {
      _ref: string
    }
  }
}

export default function HeroSection({
  data,
  children,
}: {
  data: HeroSectionData
  children?: React.ReactNode
}) {
  const { heading, description, buttonText, buttonLink, backgroundImage } = data
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (ctx) {
      let animationFrameId: number

      const resizeCanvas = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }

      class Particle {
        x: number
        y: number
        vx: number
        vy: number
        radius: number

        constructor(x: number, y: number, vx: number, vy: number) {
          this.x = x
          this.y = y
          this.vx = vx
          this.vy = vy
          this.radius = Math.random() * 1.5 + 1
        }

        draw(ctx: CanvasRenderingContext2D) {
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
          ctx.fill()
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
        const particleCount = Math.floor((canvas.width * canvas.height) / 15000)
        for (let i = 0; i < particleCount; i++) {
          particles.push(
            new Particle(
              Math.random() * canvas.width,
              Math.random() * canvas.height,
              (Math.random() - 0.5) * 0.5,
              (Math.random() - 0.5) * 0.5,
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
            if (distance < 120) {
              ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 120})`
              ctx.lineWidth = 0.5
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
    }
  }, [])

  return (
    <section className="relative w-full h-[50vh] sm:h-[75vh] flex items-center justify-center bg-gray-900 overflow-hidden pt-24">
      {/* Background Image */}
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            scale: [1, 1.1, 1],
            filter: ['grayscale(0%)', 'grayscale(100%)', 'grayscale(0%)'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'mirror',
          }}
        >
          <Image
            src={urlFor(backgroundImage).url()}
            alt="Hero Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
            // The quality prop can be adjusted. Lower values can help with performance on large images.
            quality={90}
          />
        </motion.div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      {/* Particle Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-20" />

      {/* Content */}
      <motion.div
        className="relative z-20 text-center text-white px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: [20, -5, 20], // Entrance animation followed by infinite floating
        }}
        transition={{
          opacity: { duration: 1, ease: 'easeOut' },
          y: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        {children || (
          <>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(110deg, #e2e8f0 20%, #94a3b8 40%, rgba(0,0,0,0.4) 50%, #94a3b8 60%, #e2e8f0 80%)',
                backgroundSize: '200% 100%',
              }}
              animate={{ backgroundPosition: ['200% center', '-200% center'] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {heading}
            </motion.h1>
            {description && (
              <div>
                <p className="max-w-2xl mx-auto mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-200">
                  {description}
                </p>
              </div>
            )}
            {buttonText && buttonLink && (
              <div className="mt-8 sm:mt-10">
                <Link
                  href={buttonLink}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-white px-8 py-3 text-base sm:px-10 sm:py-4 sm:text-lg font-bold text-black shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                >
                  <span className="absolute h-0 w-0 rounded-full bg-gray-300 transition-all duration-300 group-hover:h-56 group-hover:w-56"></span>
                  <span className="relative">{buttonText}</span>
                </Link>
              </div>
            )}
          </>
        )}
      </motion.div>
    </section>
  )
}
