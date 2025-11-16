'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { urlFor } from '@/lib/sanity.image'
import { motion, type Variants } from 'framer-motion'

export interface SponsorsData {
  title: string
  description?: string
  logos: {
    _key: string
    asset: {
      _ref: string
    }
    alt?: string
  }[]
}

const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// This component handles the client-side randomization to prevent hydration errors
function AnimatedSponsorLogo({ logo }: { logo: SponsorsData['logos'][0] }) {
  const [animationProps, setAnimationProps] = useState<{
    duration: number;
    shadowColor1: string;
    shadowColor2: string;
  } | null>(null);

  useEffect(() => {
    // This code runs only on the client, after the initial render.
    const randomDuration = Math.random() * 4 + 3; // 3 to 7 seconds for the pulse
    const shadowColors = [
      'rgba(255, 0, 127, 0.7)', // Pink
      'rgba(0, 255, 255, 0.7)', // Cyan
      'rgba(255, 215, 0, 0.7)', // Gold
      'rgba(138, 43, 226, 0.7)', // Blue Violet
      'rgba(0, 255, 0, 0.7)', // Lime Green
      'rgba(255, 69, 0, 0.7)', // Orange Red
      'rgba(218, 112, 214, 0.7)', // Orchid
    ];
    const randomColor1 = shadowColors[Math.floor(Math.random() * shadowColors.length)];
    let randomColor2 = shadowColors[Math.floor(Math.random() * shadowColors.length)];
    // Ensure colors are different for a more dynamic pulse
    while (randomColor2 === randomColor1) {
      randomColor2 = shadowColors[Math.floor(Math.random() * shadowColors.length)];
    }

    setAnimationProps({
      duration: randomDuration,
      shadowColor1: randomColor1,
      shadowColor2: randomColor2,
    });
  }, []); // Empty dependency array ensures this runs only once on mount.

  return (
    <motion.div
      className="relative rounded-full p-[3px] overflow-hidden group" // Changed to circle and adjusted padding
      whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
      // Animate only when client-side props are ready
      animate={animationProps ? {
        y: [0, -8, 0], // The floating motion
        boxShadow: [
          `0 0 0px 0px ${animationProps.shadowColor1}`, // Start with no shadow
          `0 0 15px 5px ${animationProps.shadowColor2}`, // Pulse out with color2
          `0 0 0px 0px ${animationProps.shadowColor1}`, // Return to no shadow
        ],
      } : {
        y: [0, -8, 0], // Fallback to just floating if props aren't ready
      }}
      transition={{
        // This default spring will apply to the 'y' and 'scale' when returning from hover
        type: 'spring', stiffness: 30, damping: 25,
        y: {
          duration: Math.random() * 3 + 4, // Random duration between 4-7 seconds
          repeat: Infinity,
          ease: 'easeInOut',
          delay: Math.random() * 2, // Random start delay up to 2 seconds
        },
        boxShadow: {
          duration: animationProps?.duration || 0,
          repeat: Infinity,
          ease: 'easeInOut', // Smooth in and out for the pulse
        },
      }}
      style={{
        background: 'transparent', // The shadow creates the border effect, no background needed here
        width: '120px', // A bit smaller
        height: '120px', // A bit smaller
      }}
    >
      <div className="relative w-full h-full bg-[#FFF8DC] rounded-full overflow-hidden"> {/* Container to clip the image */}
        <Image
          src={urlFor(logo).url()}
          alt={logo.alt || 'Sponsor Logo'}
          fill
          className="object-cover transition-all duration-300 ease-in-out filter grayscale group-hover:grayscale-0"
        />
      </div>
    </motion.div>
  );
}

export default function Sponsors({data}: {data: SponsorsData}) {
  const {title, description, logos} = data

  if (!logos || logos.length === 0) {
    return null
  }

  const sectionRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const logosRef = useRef<HTMLDivElement>(null)
  const individualLogoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const obstaclesRef = useRef<DOMRect[]>([]);

  const cloudCanvasRef = useRef<HTMLCanvasElement>(null);
  const cloudSettings = {
    particleCount: 180, // Significantly increased for a very dense, continuous cloud layer
  };

  // This effect calculates the positions of the content (obstacles) and stores them in a ref.
  useEffect(() => {
    // Get the bounding box for the title
    const titleObs = titleRef.current ? [titleRef.current.getBoundingClientRect()] : [];
    // Get the bounding box for EACH individual logo
    const logoObs = individualLogoRefs.current.filter(Boolean).map(el => el!.getBoundingClientRect());
    // Combine them into the final list of obstacles
    obstaclesRef.current = [...titleObs, ...logoObs];
  }, [title, description, logos]); // Recalculate if content changes

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return
    
    const setupAnimation = (canvas: HTMLCanvasElement, section: HTMLElement) => {
      const ctx = canvas.getContext('2d')
      if (!ctx) return
  
      const mouse = {
        x: -1000,
        y: -1000,
        radius: 120, // The area of effect around the mouse
      }

      const handleMouseMove = (event: MouseEvent) => {
        const rect = canvas.getBoundingClientRect()
        mouse.x = event.clientX - rect.left
        mouse.y = event.clientY - rect.top
      }

      let animationFrameId: number
  
      const resizeCanvas = () => {
        canvas.width = section.offsetWidth
        canvas.height = section.offsetHeight
      }
  
      class Particle {
        x: number
        y: number
        vx: number
        vy: number
        width: number
        height: number
        rotation: number
        rotationSpeed: number
        life: number
        initialLife: number
        color: string
  
        constructor() {
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height - canvas.height // Start above the canvas
          this.vx = (Math.random() - 0.5) * 1.5 // Horizontal wobble
          this.vy = Math.random() * 1 + 0.8 // Falling speed
          this.width = Math.random() * 8 + 6
          this.height = Math.random() * 8 + 6
          this.rotation = Math.random() * Math.PI * 2
          this.rotationSpeed = (Math.random() - 0.5) * 0.1
          this.initialLife = Math.random() * 300 + 200 // Particles live longer
          this.life = this.initialLife
          const colors = [
            '#007bff', // Blue
            '#28a745', // Green
            '#dc3545', // Red
            '#ffc107', // Yellow
            '#17a2b8', // Teal
            '#fd7e14', // Orange
          ]
          this.color = colors[Math.floor(Math.random() * colors.length)]
        }
  
        draw(ctx: CanvasRenderingContext2D) {
          const opacity = 0.6 * (this.life / this.initialLife)
          ctx.save()
          ctx.translate(this.x, this.y)
          ctx.rotate(this.rotation)
          ctx.fillStyle = this.color
          ctx.globalAlpha = opacity
          ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height)
          ctx.restore()
        }
  
        update(sectionRect: DOMRect, currentObstacles: DOMRect[]) {
          this.x += this.vx
          this.y += this.vy
          this.rotation += this.rotationSpeed

          // Mouse interaction
          const dx = this.x - mouse.x
          const dy = this.y - mouse.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius
            const forceX = dx / distance
            const forceY = dy / distance
            this.x += forceX * force * 3
            this.y += forceY * force * 3
          }


          this.life--
          if (this.life <= 0) {
            // Reset particle to the top when it fades
            this.x = Math.random() * canvas.width
            this.y = -this.height // Start just above the screen
            this.life = this.initialLife
          }
        }
      }
  
      const particles = Array.from({ length: 150 }, () => new Particle()) // More particles for a confetti effect

      const animate = () => {
        const sectionRect = section.getBoundingClientRect();
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        particles.forEach((p) => {
          p.update(sectionRect, obstaclesRef.current)
          p.draw(ctx)
        })
        ctx.shadowBlur = 0 // Reset shadow blur after drawing all particles
        animationFrameId = requestAnimationFrame(animate)
      }
  
      resizeCanvas()
      animate() // Start animation
  
      section.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('resize', resizeCanvas)
      return () => {
        window.removeEventListener('resize', resizeCanvas)
        section.removeEventListener('mousemove', handleMouseMove)
        cancelAnimationFrame(animationFrameId)
      }
    }
    
    return setupAnimation(canvas, section)
  }, []) // This effect should only run once.

  useEffect(() => {
    const canvas = cloudCanvasRef.current;
    const section = sectionRef.current;

    if (canvas && section) {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let animationFrameId: number;

      const resizeCanvas = () => {
        canvas.width = section.offsetWidth;
        canvas.height = 200; // Fixed height for the cloud area
        canvas.style.bottom = '0'; // Stick to the bottom
      };

      class CloudParticle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        radius: number;
        color: string;
        // Mouse interaction for clouds
        mouse: { x: number; y: number; radius: number };

        constructor(canvas: HTMLCanvasElement) {
          this.radius = Math.random() * 100 + 80; // Even wider particles for better coverage
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height + this.radius; // Start below or within canvas, preventing top clipping
          this.vx = (Math.random() - 0.5) * 0.4; // Slower horizontal movement
          this.vy = (Math.random() - 0.5) * 0.05; // Subtle vertical movement
          const colors = [
            'rgba(255, 255, 255, 0.25)', // Semi-transparent white
            'rgba(220, 220, 220, 0.3)',  // Light grey
            'rgba(200, 200, 200, 0.2)',  // Darker grey
            'rgba(200, 210, 220, 0.3)',  // Light blue-grey
            'rgba(210, 200, 220, 0.25)', // Light purple-grey
          ];
          this.color = colors[Math.floor(Math.random() * colors.length)];
          this.mouse = { x: -1000, y: -1000, radius: 150 }; // Larger radius for cloud interaction
        }

        draw(ctx: CanvasRenderingContext2D): void {
          // Use a radial gradient to create a soft, blurry effect
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
          gradient.addColorStop(0, this.color);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // Fully transparent at the edges

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        update(canvas: HTMLCanvasElement): void {
          this.x += this.vx;
          this.y += this.vy; // Apply subtle vertical movement

          // Bounce off horizontal and vertical edges to keep the cloud bank contained and full
          if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) this.vx *= -1;
          if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) this.vy *= -1;

          // Mouse interaction for clouds
          const dx = this.x - this.mouse.x;
          const dy = this.y - this.mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < this.mouse.radius) {
            const force = (this.mouse.radius - distance) / this.mouse.radius;
            const forceX = dx / distance;
            const forceY = dy / distance;
            this.x += forceX * force * 0.8; // Weaker push than confetti
            this.y += forceY * force * 0.8;
          }
        }
      }

      const particles: CloudParticle[] = [];
      
      // Mouse tracking for clouds
      const cloudMouse = {
        x: -1000,
        y: -1000,
        radius: 150, // The area of effect around the mouse for clouds
      };

      const handleCloudMouseMove = (event: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        cloudMouse.x = event.clientX - rect.left;
        cloudMouse.y = event.clientY - rect.top;
        particles.forEach(p => p.mouse = cloudMouse); // Update mouse position for each particle
      };

      const initializeParticles = (canvas: HTMLCanvasElement) => {
        particles.length = 0;
        for (let i = 0; i < cloudSettings.particleCount; i++) {
          particles.push(new CloudParticle(canvas));
        }
      };

      const animate = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => {
          p.update(canvas);
          p.draw(ctx);
        });
        animationFrameId = requestAnimationFrame(() => animate(ctx, canvas));
      };

      const handleResize = () => {
        resizeCanvas();
        initializeParticles(canvas);
      };

      handleResize();
      animate(ctx, canvas);
      
      canvas.addEventListener('mousemove', handleCloudMouseMove);

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        canvas.removeEventListener('mousemove', handleCloudMouseMove);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);



  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 overflow-hidden" style={{ backgroundColor: '#FFF8DC' }}>
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <canvas
        ref={cloudCanvasRef}
        className="absolute left-0 z-10" // Placed above confetti (z-0) but below content (z-20)
        style={{
          bottom: 0,
          width: '100%',
          height: '200px',
        }}
      />
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={titleRef} initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.5}}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black text-center">{title}</h2>
          {description && <p className="mt-4 max-w-2xl mx-auto text-center text-base sm:text-lg md:text-xl text-gray-600">{description}</p>}
        </motion.div>

        <motion.div
          ref={logosRef}
          className="mt-16 flex flex-wrap justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
        >
          {logos.map((logo, i) => (
            <motion.div
              key={logo._key}
              ref={el => { individualLogoRefs.current[i] = el; }} // Assign a ref to each logo wrapper
              custom={i}
              variants={itemVariants}
              className="p-8 sm:p-10"
            >
              <AnimatedSponsorLogo logo={logo} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}