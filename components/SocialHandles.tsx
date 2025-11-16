'use client'

import { motion, type Variants } from 'framer-motion'
import React, { useState, useEffect, useRef, type MouseEvent } from 'react'
import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
  TikTokIcon,
} from './SocialIcons'

const socialIconMap: { [key: string]: React.ElementType } = {
  Twitter: TwitterIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  YouTube: YouTubeIcon,
  TikTok: TikTokIcon,
}

export interface SocialLink {
  _key: string
  platform: string
  url: string
}

export interface SocialHandlesData {
  heading: string
  description?: string
  socialLinks?: SocialLink[]
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
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
  visible: (i: number) => ({
    opacity: 1, // Entrance opacity
    y: 0, // Entrance y position
    transition: {
      // Entrance animation
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

function AnimatedSocialIcon({ social, Icon, index }: { social: SocialLink; Icon: React.ElementType; index: number }) {
  const [animationProps, setAnimationProps] = useState<{
    duration: number;
    direction: number;
    color: string;
  } | null>(null);

  useEffect(() => {
    // This randomization only runs on the client, after hydration
    const randomDuration = Math.random() * 5 + 5; // 5 to 10 seconds
    const randomDirection = Math.random() > 0.5 ? 1 : -1; // Clockwise or counter-clockwise
    const colors = ['#FF007F', '#00FFFF', '#FFD700', '#8A2BE2', '#00FF00'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    setAnimationProps({
      duration: randomDuration,
      direction: randomDirection,
      color: randomColor,
    });
  }, []);

  return (
    <motion.div
      key={social._key}
      variants={itemVariants}
      custom={index}
      whileHover={{ scale: 1.2, y: -10, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      {/* The "Comet" Orb */}
      {animationProps && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{ rotate: 360 * animationProps.direction }}
          transition={{
            duration: animationProps.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
            style={{
              background: animationProps.color,
              boxShadow: `0 0 12px ${animationProps.color}, 0 0 20px ${animationProps.color}`,
            }}
          />
        </motion.div>
      )}
      <a href={social.url} target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center p-5 sm:p-6 rounded-full bg-[#F5F5DC] border border-black/20 hover:bg-opacity-80 transition-all duration-300 ease-in-out">
        <span className="sr-only">{social.platform}</span>
        <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-black" />
      </a>
    </motion.div>
  );
}

export default function SocialHandles({ data }: { data: SocialHandlesData }) {
  const { heading, description, socialLinks } = data
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const topCloudCanvasRef = useRef<HTMLCanvasElement>(null);
  const bottomCloudCanvasRef = useRef<HTMLCanvasElement>(null);
  const sidesCanvasRef = useRef<HTMLCanvasElement>(null);


  // Effect for the TOP cloud particle animation
  // useEffect(() => {
  //   const canvas = topCloudCanvasRef.current;
  //   const section = sectionRef.current;

  //   if (canvas && section) {
  //     const ctx = canvas.getContext('2d');
  //     if (!ctx) return;

  //     let animationFrameId: number;

  //     const resizeCanvas = () => {
  //       canvas.width = section.offsetWidth;
  //       canvas.height = 150; // Increased height for more presence
  //       canvas.style.top = '0'; // Stick to the top
  //     };

  //     class TopCloudParticle {
  //       x: number;
  //       y: number;
  //       vx: number;
  //       vy: number;
  //       radius: number;
  //       color: string;

  //       constructor(canvas: HTMLCanvasElement) {
  //         this.radius = Math.random() * 120 + 90; // Increased size for better coverage
  //         this.x = Math.random() * canvas.width;
  //         this.y = Math.random() * canvas.height - this.radius; // "Flipped" origin point
  //         this.vx = (Math.random() - 0.5) * 0.4;
  //         this.vy = (Math.random() - 0.5) * 0.05;
  //         const colors = [
  //           'rgba(255, 255, 255, 0.25)',
  //           'rgba(220, 220, 220, 0.3)',
  //           'rgba(200, 200, 200, 0.2)',
  //         ];
  //         this.color = colors[Math.floor(Math.random() * colors.length)];
  //       }

  //       draw(ctx: CanvasRenderingContext2D): void {
  //         const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
  //         gradient.addColorStop(0, this.color);
  //         gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  //         ctx.fillStyle = gradient;
  //         ctx.beginPath();
  //         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  //         ctx.fill();
  //       }

  //       update(canvas: HTMLCanvasElement): void {
  //         this.x += this.vx;
  //         this.y += this.vy;

  //         // Bounce off all edges to keep the cloud bank contained and full
  //         if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) this.vx *= -1;
  //         if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) this.vy *= -1; // This will fix the hard line
  //       }
  //     }

  //     const particles: TopCloudParticle[] = [];

  //     const initializeParticles = (canvas: HTMLCanvasElement) => {
  //       particles.length = 0;
  //       for (let i = 0; i < 220; i++) { // Drastically increased for a very dense cloud layer
  //         particles.push(new TopCloudParticle(canvas));
  //       }
  //     };

  //     const animate = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  //       ctx.clearRect(0, 0, canvas.width, canvas.height);
  //       particles.forEach((p) => p.update(canvas));
  //       particles.forEach((p) => p.draw(ctx));
  //       animationFrameId = requestAnimationFrame(() => animate(ctx, canvas));
  //     };

  //     const handleResize = () => {
  //       resizeCanvas();
  //       initializeParticles(canvas);
  //     };

  //     handleResize();
  //     animate(ctx, canvas);

  //     window.addEventListener('resize', handleResize);

  //     return () => {
  //       window.removeEventListener('resize', handleResize);
  //       cancelAnimationFrame(animationFrameId);
  //     };
  //   }
  // }, []);

  // Effect for the BOTTOM cloud particle animation
  // useEffect(() => {
  //   const canvas = bottomCloudCanvasRef.current;
  //   const section = sectionRef.current;

  //   if (canvas && section) {
  //     const ctx = canvas.getContext('2d');
  //     if (!ctx) return;

  //     let animationFrameId: number;

  //     const resizeCanvas = () => {
  //       canvas.width = section.offsetWidth;
  //       canvas.height = 150; // Match top cloud height
  //       canvas.style.bottom = '0'; // Stick to the bottom
  //     };

  //     class BottomCloudParticle {
  //       x: number;
  //       y: number;
  //       vx: number;
  //       vy: number;
  //       radius: number;
  //       color: string;

  //       constructor(canvas: HTMLCanvasElement) {
  //         this.radius = Math.random() * 120 + 90; // Match top cloud size
  //'ve removed the `sidesCanvasRef` and the entire `useEffect` hook that was responsible for the side orb animation. This simplifies the component and, most importantly, frees up browser resources, which should resolve the glitchiness you were seeing on the hover effects.
  //         this.x = Math.random() * canvas.width;
  //         this.y = Math.random() * canvas.height + this.radius; // "Flipped" for bottom
  //         this.vx = (Math.random() - 0.5) * 0.4;
  //         this.vy = (Math.random() - 0.5) * 0.05;
  //         const colors = [
  //           'rgba(255, 255, 255, 0.25)',
  //           'rgba(220, 220, 220, 0.3)',
  //           'rgba(200, 200, 200, 0.2)',
  //         ];
  //         this.color = colors[Math.floor(Math.random() * colors.length)];
  //       }

  //       draw(ctx: CanvasRenderingContext2D): void {
  //         const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
  //         gradient.addColorStop(0, this.color);
  //         gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  //         ctx.fillStyle = gradient;
  //         ctx.beginPath();
  //         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  //         ctx.fill();
  //       }

  //       update(canvas: HTMLCanvasElement): void {
  //         this.x += this.vx;
  //         this.y += this.vy;

  //         if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) this.vx *= -1;
  //         if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) this.vy *= -1;
  //       }
  //     }

  //     const particles: BottomCloudParticle[] = [];

  //     const initializeParticles = (canvas: HTMLCanvasElement) => {
  //       particles.length = 0;
  //       for (let i = 0; i < 220; i++) { // Match top cloud density
  //         particles.push(new BottomCloudParticle(canvas));
  //       }
  //     };

  //     const animate = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  //       ctx.clearRect(0, 0, canvas.width, canvas.height);
  //       particles.forEach((p) => p.update(canvas));
  //       particles.forEach((p) => p.draw(ctx));
  //       animationFrameId = requestAnimationFrame(() => animate(ctx, canvas));
  //     };

  //     const handleResize = () => {
  //       resizeCanvas();
  //       initializeParticles(canvas);
  //     };

  //     handleResize();
  //     animate(ctx, canvas);

  //     window.addEventListener('resize', handleResize);

  //     return () => {
  //       window.removeEventListener('resize', handleResize);
  //       cancelAnimationFrame(animationFrameId);
  //     };
  //   }
  // }, []);

  // Effect for the SIDES "Drifting Shards" animation
  // useEffect(() => {
  //   const canvas = sidesCanvasRef.current;
  //   const section = sectionRef.current;

  //   if (canvas && section) {
  //     const ctx = canvas.getContext('2d');
  //     if (!ctx) return;

  //     let animationFrameId: number;

  //     const resizeCanvas = () => {
  //       canvas.width = section.offsetWidth;
  //       canvas.height = section.offsetHeight;
  //     };

  //     class ShardParticle {
  //       x: number;
  //       y: number;
  //       vx: number;
  //       vy: number;
  //       size: number;
  //       rotation: number;
  //       rotationSpeed: number;
  //       opacity: number;

  //       constructor(canvas: HTMLCanvasElement) {
  //         this.x = Math.random() * canvas.width; // Cover the entire width
  //         this.y = Math.random() * canvas.height;
  //         this.vx = (Math.random() - 0.5) * 0.4; // Increased speed
  //         this.vy = (Math.random() - 0.5) * 0.4; // Increased speed
  //         this.size = Math.random() * 15 + 10;
  //         this.rotation = Math.random() * Math.PI * 2;
  //         this.rotationSpeed = (Math.random() - 0.5) * 0.005;
  //         this.opacity = Math.random() * 0.2 + 0.1;
  //       }

  //       draw(ctx: CanvasRenderingContext2D): void {
  //         ctx.save();
  //         ctx.translate(this.x, this.y);
  //         ctx.rotate(this.rotation);
  //         ctx.beginPath();
  //         ctx.moveTo(0, -this.size);
  //         ctx.lineTo(this.size, this.size);
  //         ctx.lineTo(-this.size, this.size);
  //         ctx.closePath();
  //         ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
  //         ctx.fill();
  //         ctx.restore();
  //       }

  //       update(canvas: HTMLCanvasElement): void {
  //         this.x += this.vx;
  //         this.y += this.vy;
  //         this.rotation += this.rotationSpeed;

  //         // Wrap around edges for continuous motion
  //         if (this.x < -this.size) this.x = canvas.width + this.size;
  //         if (this.x > canvas.width + this.size) this.x = -this.size;
  //         if (this.y < -this.size) this.y = canvas.height + this.size;
  //         if (this.y > canvas.height + this.size) this.y = -this.size;
  //       }
  //     }

  //     const shards = Array.from({ length: 70 }, () => new ShardParticle(canvas)); // Increased density

  //     const animate = () => {
  //       ctx.clearRect(0, 0, canvas.width, canvas.height);
  //       shards.forEach((shard) => shard.update(canvas));
  //       shards.forEach((shard) => shard.draw(ctx));
  //       animationFrameId = requestAnimationFrame(animate);
  //     };

  //     resizeCanvas();
  //     animate();

  //     window.addEventListener('resize', resizeCanvas);
  //     return () => {
  //       window.removeEventListener('resize', resizeCanvas);
  //       cancelAnimationFrame(animationFrameId);
  //     };
  //   }
  // }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#C1B59E] text-black overflow-hidden">
      {/* <canvas
        ref={topCloudCanvasRef}
        className="absolute left-0 z-1"
        style={{
          top: 0,
          width: '100%',
          height: '150px',
        }}
      /> */}
      {/* <canvas
        ref={bottomCloudCanvasRef}
        className="absolute left-0 z-1"
        style={{
          bottom: 0,
          width: '100%',
          height: '150px',
        }}
      /> */}
      {/* <canvas
        ref={sidesCanvasRef}
        className="absolute inset-0 z-0"
      /> */}
      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">
            {heading}
          </h2>
          {description && (
            <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-gray-700 leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>

        {socialLinks && socialLinks.length > 0 && (
          <motion.div
            className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-12 sm:mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {socialLinks.map((social, i) => {
              const Icon = socialIconMap[social.platform]
              return Icon ? (
                <AnimatedSocialIcon key={social._key} social={social} Icon={Icon} index={i} />
              ) : null
            })}
          </motion.div>
        )}
      </div>
    </section>
  )
}