'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'
import {
  ShieldCheckIcon,
  LockClosedIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline'

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
)

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3v9h4Z" />
  </svg>
)

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122s-.013 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06s-3.056-.013-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12s.013-3.056.06-4.122c.05-1.065.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.25a1.25 1.25 0 0 0-1.25 1.25A1.25 1.25 0 0 0 18.5 9.25a1.25 1.25 0 0 0 1.25-1.25A1.25 1.25 0 0 0 18.5 6.75Z" />
  </svg>
)

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6.5 21.5h-5v-13h5v13ZM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.5 2.5-2.5c1.4 0 2.5 1.2 2.5 2.5s-1.1 2.5-2.5 2.5Zm17 15h-5v-6.7c0-1.6-.6-2.7-2-2.7c-1.1 0-1.7.8-2 1.5c-.1.3-.1.6-.1 1v6.9h-5v-13h5v2.3c.8-1.1 2.1-2.6 4.5-2.6c3.3 0 5.5 2.1 5.5 6.6v6.7Z" />
  </svg>
)

const YouTubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.94-.262-1.683-1.037-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.893 0 7.605.476c.94.262 1.683 1.037 1.938 2.022ZM10 15.5l6-3.5-6-3.5Z" />
  </svg>
)

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
  </svg>
)

const socialIconMap: { [key: string]: React.ElementType } = {
  Twitter: TwitterIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  YouTube: YouTubeIcon,
  TikTok: TikTokIcon,
}

export interface FooterData {
  mainTitle?: string
  logo?: {
    asset: {
      _ref: string
    }
  }
  tagline?: string
  linkColumns?: {
    _key: string
    title: string
    links: { _key: string; title: string; url: string }[]
  }[]
  securityNotice?: string
  copyrightText?: string
  privacyPolicyText?: string
  privacyPolicyLink?: string
  termsOfServiceText?: string
  termsOfServiceLink?: string
  socialLinks?: {
    _key: string
    platform: string
    url: string
  }[]
}

export default function Footer({ data }: { data: FooterData }) {
  const {
    mainTitle,
    logo,
    tagline,
    linkColumns,
    securityNotice,
    copyrightText,
    privacyPolicyText,
    privacyPolicyLink,
    termsOfServiceText,
    termsOfServiceLink,
    socialLinks,
  } = data

  // We define the animation keyframes here since tailwind.config.js is not available.
  const animationStyle = `
    @keyframes gradient {
      0% { background-position: 0% 50% }
      100% { background-position: 100% 50% }
    }
    .animate-gradient-text {
      background-size: 400% 400%;
      animation: gradient 4s linear infinite alternate;
    }
  `

  return (
    <motion.footer
      className="bg-black text-gray-400"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <style>{animationStyle}</style>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* --- ROW 1: Title, Logo, and Social Links --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Side: Logo and Social */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {logo && <Image src={urlFor(logo).width(200).url()} alt="FlowState Meta Logo" width={160} height={50} className="h-12 w-auto" />}
            <div className="flex space-x-6">
              {socialLinks?.map((social) => {
                const Icon = socialIconMap[social.platform]
                return Icon ? (
                  <motion.a key={social._key} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" whileHover={{ scale: 1.2, y: -2 }} transition={{ duration: 0.2 }}>
                    <span className="sr-only">{social.platform}</span>
                    <Icon className="h-6 w-6" />
                  </motion.a>
                ) : null
              })}
            </div>
          </div>
          {/* Right Side: Main Title */}
          {mainTitle && (
            <h2 className="animate-gradient-text text-4xl md:text-5xl font-extrabold text-center md:text-right bg-gradient-to-r from-indigo-900 via-fuchsia-500 to-indigo-900 bg-clip-text text-transparent">
              {mainTitle}
            </h2>
          )}
        </div>

        {/* --- ROW 2: Link Columns and Security Section --- */}
        <div className="mt-12 ">
          <div className="flex flex-wrap justify-between gap-8">
            {/* Link Columns */}
            {linkColumns?.map((column) => (
              <div key={column._key} className="text-left">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">{column.title}</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {column.links.map((link) => (
                    <li key={link._key}>
                      <Link href={link.url} className="text-base text-gray-400 hover:text-white transition-colors">{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Security Section */}
            <div className="space-y-4 text-left">
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Platform Security</h3>
              <div className="flex flex-col items-start gap-3 text-sm text-gray-400">
                <div className="flex items-center gap-2 whitespace-nowrap"><ShieldCheckIcon className="h-5 w-5 text-green-400" /><span>SSL Secured Communication</span></div>
                <div className="flex items-center gap-2 whitespace-nowrap"><LockClosedIcon className="h-5 w-5 text-green-400" /><span>End-to-End Data Encryption</span></div>
                <div className="flex items-center gap-2 whitespace-nowrap"><CircleStackIcon className="h-5 w-5 text-green-400" /><span>Responsible Cookie Management</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* --- ROW 3: Bottom Bar --- */}
        <div className="mt-12 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-base text-gray-400 text-center md:order-1 md:text-left">&copy; {copyrightText || '2025 FlowState Meta. All rights reserved.'}</p>
          <div className="flex items-center justify-center gap-6 mt-4 md:mt-0 md:order-2">
            {privacyPolicyText && privacyPolicyLink && (
              <Link href={privacyPolicyLink} className="text-base hover:text-white transition-colors">{privacyPolicyText}</Link>
            )}
            {termsOfServiceText && termsOfServiceLink && (
              <Link href={termsOfServiceLink} className="text-base hover:text-white transition-colors">{termsOfServiceText}</Link>
            )}
          </div>
          {securityNotice && <p className="mt-8 text-xs text-gray-500 text-center md:mt-0 md:order-3 md:text-right">{securityNotice}</p>}
        </div>
      </div>
    </motion.footer>
  )
}