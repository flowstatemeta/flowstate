'use client'

import { validateEmail } from '@/app/actions/validateEmail'
import { useState, useRef, useEffect, useCallback, type MouseEvent, type FC } from 'react'
import { submitContactForm } from '@/app/actions/submitContactForm'
import { motion, AnimatePresence } from 'framer-motion'
import {
  UserIcon,
  LockClosedIcon,
  EnvelopeIcon, // Keep envelope icon import
  ChatBubbleLeftRightIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  PaperAirplaneIcon,
  KeyIcon, // Import KeyIcon for password field
} from '@heroicons/react/24/outline'

import { useMotionValue, useTransform, useSpring, type Variants } from 'framer-motion'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation';
type Tab = 'login' | 'contact'

const particleOptions = {
  particleColor: 'rgba(255, 255, 255, 0.7)',
  lineColor: 'rgba(255, 255, 255, 0.2)',
  particleAmount: 50,
  defaultRadius: 1.5,
  variantRadius: 1,
  defaultSpeed: 0.3,
  variantSpeed: 0.5,
  linkRadius: 150,
}

class Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  type: 'particle' | 'shootingStar'
  life: number
  initialLife: number

  constructor(canvas: HTMLCanvasElement) {
    this.type = Math.random() > 0.05 ? 'particle' : 'shootingStar';
    this.initialLife = this.type === 'shootingStar' ? Math.random() * 100 + 100 : Infinity;
    this.life = this.initialLife;

    if (this.type === 'shootingStar') {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 10 + 5; // Much faster
      this.vy = (Math.random() - 0.5) * 2;
      this.radius = Math.random() * 2 + 1;
    } else {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * particleOptions.defaultSpeed;
      this.vy = (Math.random() - 0.5) * particleOptions.defaultSpeed;
      this.radius = particleOptions.defaultRadius + Math.random() * particleOptions.variantRadius;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    const opacity = this.life / this.initialLife;

    if (this.type === 'shootingStar') {
      // Draw a trail for the shooting star
      ctx.beginPath();
      ctx.moveTo(this.x - this.vx * 4, this.y - this.vy * 4);
      ctx.lineTo(this.x, this.y);
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.5})`;
      ctx.lineWidth = this.radius;
      ctx.stroke();
    }

    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 255, 255, ${this.type === 'shootingStar' ? opacity : 0.7})`
    ctx.fill()
  }

  update(canvas: HTMLCanvasElement) {
    this.life--;
    this.x += this.vx
    this.y += this.vy

    if (this.type === 'particle') {
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1
    } else if (this.life <= 0) {
      // Reset shooting star when it fades
      this.x = -this.radius;
      this.y = Math.random() * canvas.height;
      this.life = this.initialLife;
    }
  }
}

class PulsingAnomaly {
  x: number;
  y: number;
  life: number;
  initialLife: number;
  radius: number;
  maxRadius: number;

  constructor(canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.initialLife = Math.floor(Math.random() * 120 + 100); // Lives for 100-220 frames
    this.life = this.initialLife;
    this.maxRadius = Math.random() * 60 + 40;
    this.radius = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const lifeRatio = this.life / this.initialLife;
    // Create a pulse that grows and then shrinks
    const pulse = Math.sin(lifeRatio * Math.PI);
    this.radius = pulse * this.maxRadius;
    const opacity = pulse * 0.7;
    // New, richer color palette
    const colors = [
      'rgba(173, 216, 230, 0.7)', // Light Blue
      'rgba(221, 160, 221, 0.7)', // Plum (Light Purple/Pink)
      'rgba(75, 0, 130, 0.6)',    // Indigo (Dark Purple)
      'rgba(220, 20, 60, 0.5)',    // Crimson (Deep Red)
      'rgba(255, 255, 255, 0.5)', // Faint White
    ];

    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
    gradient.addColorStop(0, colors[Math.floor(this.life % colors.length)]); // Cycle through colors
    gradient.addColorStop(0.7, `rgba(173, 216, 230, ${opacity * 0.3})`); // Keep a consistent outer glow
    gradient.addColorStop(1, 'rgba(173, 216, 230, 0)');

    ctx.fillStyle = gradient;
    ctx.shadowColor = 'rgba(200, 225, 255, 0.8)';
    ctx.shadowBlur = 20;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0; // Reset shadow
  }

  update(particles: Particle[]) {
    this.life--;
    // Distort nearby particles
    for (const particle of particles) {
      const dx = particle.x - this.x;
      const dy = particle.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < this.radius + 50) {
        const force = (this.radius + 50 - distance) / (this.radius + 50);
        particle.x += (dx / distance) * force * 0.5;
        particle.y += (dy / distance) * force * 0.5;
      }
    }
  }
}

export default function UnifiedAuthForm() {
  const [activeTab, setActiveTab] = useState<Tab>('login')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const router = useRouter();
  const searchParams = useSearchParams();

  // State for form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactStatus, setContactStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isEmailValidating, setIsEmailValidating] = useState(false);
  const [[direction, prevTab], setDirection] = useState([0, activeTab]);

  const messageCharLimit = 500;
  const showLogin = searchParams.get('showLogin') === 'true';

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    const particles: Particle[] = []
    const anomalies: PulsingAnomaly[] = [];
    let frameCount = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      for (let i = 0; i < particleOptions.particleAmount; i++) {
        particles.push(new Particle(canvas))
      }
    }

    const connect = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt(
            (particles[i].x - particles[j].x) ** 2 +
              (particles[i].y - particles[j].y) ** 2,
          )
          if (distance < particleOptions.linkRadius) {
            ctx.strokeStyle = particleOptions.lineColor
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.update(canvas)
        p.draw(ctx)
      })
      connect()

      // Animate Pulsing Anomalies
      frameCount++;
      if (frameCount % 180 === 0 && anomalies.length < 2) { // Add a new anomaly every ~3 seconds
        anomalies.push(new PulsingAnomaly(canvas));
      }

      for (let i = anomalies.length - 1; i >= 0; i--) {
        anomalies[i].update(particles);
        anomalies[i].draw(ctx);
        if (anomalies[i].life <= 0) anomalies.splice(i, 1); // Remove dead anomalies
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  useEffect(() => {
    const tabFromUrl = searchParams.get('tab');

    const effectiveTab = tabFromUrl === 'contactus' ? 'contact' : tabFromUrl;

    if (effectiveTab === 'login' || effectiveTab === 'contact') {
      if (activeTab !== effectiveTab) {
        // Clear status messages when switching tabs
        setContactStatus(null);
        setActiveTab(effectiveTab);
      }
    } else if (showLogin) {
      setActiveTab('login')
    }
  }, [searchParams, showLogin]);

  // Debounced email validation for contact form
  useEffect(() => {
    if (activeTab !== 'contact' || !contactEmail) {
      setEmailError(null);
      return;
    }

    setIsEmailValidating(true);
    const handler = setTimeout(async () => {
      const result = await validateEmail(contactEmail);
      if (!result.isValid) {
        setEmailError(result.message);
      } else {
        setEmailError(null);
      }
      setIsEmailValidating(false);
    }, 1000); // Wait 1 second after user stops typing

    return () => clearTimeout(handler);
  }, [contactEmail, activeTab]);

  const createURL = useCallback(
    (tab: string) => `/join?tab=${tab}`, []
  );
  
  const allTabs: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: 'login', label: 'Login', icon: ArrowRightOnRectangleIcon },
    { id: 'contact', label: 'Contact', icon: PaperAirplaneIcon },
  ]

  const visibleTabs = showLogin 
    ? allTabs 
    : allTabs.filter(tab => tab.id === 'contact');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    if (activeTab === 'login') { // Handle Login Form Submission
      setLoginError(null); // Clear previous errors
      const result = await signIn('credentials', {
        redirect: false, // We will handle the redirect manually
        username: username,
        password: password,
      });

      if (result?.error) {
        setLoginError('Invalid username or password.');
      } else if (result?.ok) {
        window.sessionStorage.setItem('isLoggedIn', 'true'); // Keep this for now to sync with other components
        router.push('/Education');
      }
    } else { // Handle Contact Form Submission
      setIsSubmitting(true);
      setContactStatus(null);
      if (emailError) {
        setContactStatus({ success: false, message: 'Please provide a valid email address.' });
        setIsSubmitting(false);
        return;
      }
      const result = await submitContactForm({
        name: contactName,
        email: contactEmail,
        message: contactMessage,
      });

      setContactStatus(result);

      if (result.success) {
        // Clear form fields after successful submission
        setContactName('')
        setContactEmail('')
        setContactMessage('')
      }
      setIsSubmitting(false);
    }
  };

  const handleContactFieldChange = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
    if (contactStatus) setContactStatus(null);
    setter(value);
  }
  
  const renderFields = () => {
    const inputClass =
      'w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 hover:bg-gray-800/70 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] focus:shadow-[0_0_15px_rgba(255,255,255,0.2)]'
    const fieldVariants: Variants = {
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0
      },
      exit: {
        opacity: 0,
        y: -10
      },
    }

    const formVariants: Variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
      exit: { opacity: 0, transition: { duration: 0.2 } },
    };

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={formVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="space-y-6 min-h-[250px]" // Ensure consistent height
        >
          {activeTab === 'contact' && (
            <motion.div variants={fieldVariants}>
              <label className="sr-only">Name</label>
              <div className="relative group">
                <motion.div
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  whileHover={{ rotate: [0, -15, 15, -15, 0], transition: { duration: 0.4 } }}
                >
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </motion.div>
                <input type="text" placeholder="Your Name" className={`${inputClass} pl-10`} required value={contactName} onChange={(e) => handleContactFieldChange(setContactName, e.target.value)} />
              </div>
            </motion.div>
          )}
          {activeTab === 'login' && (
            <motion.div variants={fieldVariants}>
              <label className="sr-only">Username</label>
              <div className="relative group">
                <motion.div
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  whileHover={{ rotate: [0, -15, 15, -15, 0], transition: { duration: 0.4 } }}
                >
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </motion.div>
                <input type="text" placeholder="Username" className={`${inputClass} pl-10`} value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>
            </motion.div>
          )}
          {activeTab === 'contact' && (
            <motion.div variants={fieldVariants}>
              <label className="sr-only">Email</label>
              <div className="relative group">
                <motion.div
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  whileHover={{ rotate: [0, -15, 15, -15, 0], transition: { duration: 0.4 } }}
                >
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                </motion.div>
                <input type="email" placeholder="Your Email" className={`${inputClass} pl-10`} required value={contactEmail} onChange={(e) => handleContactFieldChange(setContactEmail, e.target.value)} />
              </div>
              <div className="h-4 mt-1 text-left">
                {isEmailValidating && <p className="text-xs text-gray-400">Validating...</p>}
                {emailError && <p className="text-xs text-red-500">{emailError}</p>}
              </div>
            </motion.div>
          )}
          {activeTab === 'login' && (
            <motion.div variants={fieldVariants}>
              <label className="sr-only">Password</label>
              <div className="relative group">
                <motion.div
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  whileHover={{ rotate: [0, -15, 15, -15, 0], transition: { duration: 0.4 } }}
                >
                  <KeyIcon className="h-5 w-5 text-gray-400" />
                </motion.div>
                <input type="password" placeholder="Password" className={`${inputClass} pl-10`} value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
            </motion.div>
          )}
          {activeTab === 'contact' && (
            <motion.div variants={fieldVariants}>
              <label className="sr-only">Message</label>
              <div className="relative group">
                <motion.div
                  className="absolute left-4 top-4"
                  whileHover={{ rotate: [0, -15, 15, -15, 0], transition: { duration: 0.4 } }}
                >
                  <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-400" />
                </motion.div>
                <textarea placeholder="Your Message..." rows={4} className={`${inputClass} pl-10`} required value={contactMessage} onChange={(e) => handleContactFieldChange(setContactMessage, e.target.value)} />
              </div>
              <div className="text-right text-xs pr-2" style={{
                color: contactMessage.length > messageCharLimit 
                  ? '#ef4444' // red-500
                  : contactMessage.length > messageCharLimit * 0.8
                  ? '#f59e0b' // amber-500
                  : '#9ca3af' // gray-400
              }}>
                {contactMessage.length} / {messageCharLimit}
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    )
  }

  // Hooks for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring-animated values that will smoothly follow the raw mouse values
  const smoothMouseX = useSpring(mouseX, { stiffness: 300, damping: 20, mass: 0.5 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 300, damping: 20, mass: 0.5 });

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [-8, 8]); // Reduced rotation for subtlety
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [8, -8]);

  const handleMouseMove = (event: MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 overflow-hidden" style={{ perspective: '1000px' }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <motion.div
        className="relative z-20 w-full max-w-md mx-4 sm:mx-0 p-6 sm:p-10 bg-white/5 backdrop-blur-3xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        initial={{ opacity: 0, scale: 0.9, rotateX: 10, rotateY: 0 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        {/* Shimmer/Glare Effect */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            background:
              'linear-gradient(120deg, transparent 20%, rgba(255, 255, 255, 0.15) 50%, transparent 80%)',
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['-200% 0%', '200% 0%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
            delay: 2, // Initial delay
          }}
        />
        <div className="flex justify-center border-b border-gray-700 mb-6 sm:mb-8">
          {visibleTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex-1 py-3 text-xs sm:text-sm font-bold transition-colors ${activeTab === tab.id ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <span className="flex items-center justify-center gap-2">
                <tab.icon className="h-5 w-5" />
                {tab.label}
              </span>
              {activeTab === tab.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  layoutId="underline"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {renderFields()}
          <motion.button
            type="submit" // The type is already submit, no change needed here.
            className="w-full mt-8 py-2.5 px-4 bg-white text-black font-bold rounded-lg shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400"
            whileHover={{ scale: 1.03, y: -2, boxShadow: '0 10px 20px rgba(255, 255, 255, 0.15)' }}
            whileTap={{ scale: 0.98, y: 0 }}
          >
            {isSubmitting ? 'Sending...' : activeTab === 'login' ? 'Login' : 'Send Message'}
          </motion.button>
          {loginError && <p className="text-red-500 text-center mt-4">{loginError}</p>}
          {contactStatus && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 text-center font-semibold ${ 
                contactStatus.success ? 'text-white' : 'text-red-500'
              }`}
            >
              {contactStatus.message}
            </motion.div>
          )}
        </form>
      </motion.div>
    </section>
  )
}