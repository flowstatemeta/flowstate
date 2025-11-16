'use client'

import React, { useEffect, useRef } from 'react'
import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'

export interface ServiceCardData {
  _key: string
  title: string
  description?: string
  backgroundImage: {
    asset: {
      _ref: string
    }
  }
  buttonText?: string
  buttonLink?: string
}

export interface ServicePreviewData {
  heading: string
  description?: string
  serviceCards: ServiceCardData[]
}

export default function ServicePreview({ data }: { data: ServicePreviewData }) {
  const { heading, description, serviceCards } = data
  const sectionRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        opacity: { duration: 0.5, ease: 'easeOut', delay: i * 0.2 },
        y: { duration: 0.5, ease: 'easeOut', delay: i * 0.2 },
      },
    }),
  }

  // Effect for the drifting motes animation
  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let isVisible = false;

    const resizeCanvas = () => {
      canvas.width = section.offsetWidth
      canvas.height = section.offsetHeight
    }

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      life: number
      initialLife: number

      constructor(canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.8 // Further increased speed
        this.vy = (Math.random() - 0.5) * 0.8 // Further increased speed
        this.radius = Math.random() * 25 + 15 // Larger, more substantial crystals
        this.initialLife = Math.random() * 400 + 300
        this.life = this.initialLife
      }

      draw(ctx: CanvasRenderingContext2D) {
        const opacity = (this.life / this.initialLife) * 0.3 // Increased opacity
        const isDarkMode = document.documentElement.classList.contains('dark')
        const color = isDarkMode ? '255, 255, 255' : '0, 0, 0'
        ctx.strokeStyle = `rgba(${color}, ${opacity})`
        ctx.lineWidth = 1.5

        // Draw a simple crystal shape
        ctx.beginPath()
        ctx.moveTo(this.x, this.y - this.radius)
        ctx.lineTo(this.x + this.radius * 0.8, this.y)
        ctx.lineTo(this.x, this.y + this.radius)
        ctx.lineTo(this.x - this.radius * 0.8, this.y)
        ctx.closePath()
        ctx.stroke()
      }

      update(canvas: HTMLCanvasElement) {
        this.life--
        this.x += this.vx
        this.y += this.vy

        // Wrap around edges for continuous motion
        if (this.x < -this.radius) this.x = canvas.width + this.radius
        if (this.x > canvas.width + this.radius) this.x = -this.radius
        if (this.y < -this.radius) this.y = canvas.height + this.radius
        if (this.y > canvas.height + this.radius) this.y = -this.radius

        if (this.life <= 0) {
          this.life = this.initialLife
        }
      }
    }

    const particles: Particle[] = []

    const initializeParticles = () => {
      particles.length = 0; // Clear existing particles
      for (let i = 0; i < 250; i++) { // Further increased density
        particles.push(new Particle(canvas));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.update(canvas)
        p.draw(ctx)
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = entry.isIntersecting;
        if (isVisible) {
          if (!animationFrameId) animate();
        } else {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = 0;
        }
      },
      { threshold: 0.01 }
    );

    observer.observe(section);

    const handleResize = () => {
      resizeCanvas();
      initializeParticles();
    };

    handleResize();

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      observer.disconnect();
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      {/* <canvas ref={canvasRef} className="absolute inset-0 z-0" /> */}
      <div className="relative z-10 max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">{heading}</h2>
        {description && (
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-black">{description}</p>
        )}
      </div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-3 gap-2 sm:gap-4 mt-8 sm:mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {serviceCards?.map((card, index) => (
          <div key={card._key} className="p-1 sm:p-2 md:p-4">
            <motion.div
              className="group relative z-10 w-full shadow-xl overflow-hidden"
              custom={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.3 } }}
            >
              <div className="aspect-[9/16] md:aspect-[4/5]">
                <Image
                  src={urlFor(card.backgroundImage).url()}
                  alt={card.title || "Service Image"}
                  fill
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    background: 'linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{ backgroundPosition: ['200% 0%', '-200% 0%'] }}
                  transition={{
                    duration: 5 + Math.random() * 5, // Randomize duration for a more organic feel
                    repeat: Infinity,
                    ease: 'linear',
                    delay: index * 0.5,
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold transition-transform duration-500 ease-in-out group-hover:-translate-y-20">{card.title}</h3>
                  <div className="max-h-0 opacity-0 group-hover:max-h-64 group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 ease-in-out">
                    <p className="text-gray-200 text-sm sm:text-base">{card.description}</p>
                    {card.buttonLink && card.buttonText && (
                      <a href={card.buttonLink} className="mt-4 inline-block bg-white text-black font-bold py-2 px-4 rounded-md text-xs sm:text-sm hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors duration-300">
                        {card.buttonText}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
