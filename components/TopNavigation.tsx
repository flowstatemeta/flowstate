'use client'

import { urlFor } from '@/lib/sanity.image'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState, useMemo, Suspense } from 'react'
import { useSession, signOut } from 'next-auth/react'

export interface NavLink {
  _key: string
  title: string
  link: string
}

export interface NavigationData {
  logo: {
    asset: {
      _ref: string
    }
  }
  homeLink?: string
  navLinks: NavLink[]
  siteTitle?: string
  loginText?: string
  loginLink?: string
  signUpText?: string
  signUpLink?: string
  contactText?: string
  contactLink?: string
  hubButtonText?: string
  hubButtonLink?: string
}


function DynamicHomeLinkComponent({ homeLink, children }: { homeLink?: string, children: (link: string) => React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const dynamicHomeLink = useMemo(() => {
    const cameFromLogin = searchParams.get('showLogin') === 'true'
    const cameFromHub = searchParams.get('from') === 'private'
    const onPrivateHome = pathname === '/privatehome'
    const onEducationHub = pathname.startsWith('/educationHub')
    const onCommunityPage = pathname === '/community'
    
    if (cameFromLogin || cameFromHub || onPrivateHome || onEducationHub || onCommunityPage) {
      return '/privatehome'
    }
    
    return homeLink || '/home'
  }, [pathname, searchParams, homeLink])

  return <>{children(dynamicHomeLink)}</>
}


export default function TopNavigation({ data }: { data: NavigationData; onHeightChange?: (height: number) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data: session, status } = useSession()
  const isLoggedIn = status === 'authenticated'

  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  if (!data) {
    return null
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const { logo, homeLink, navLinks, loginText, loginLink, signUpText, signUpLink, contactText, contactLink } = data

  const isJoinPage = pathname === '/join'
  const isSignUpPage = pathname === '/signup'
  const isQuestionnairePage = pathname === '/questionnaire'
  const isEducationHubPage = pathname.startsWith('/educationHub')
  const isCommunityPage = pathname === '/community'
  const isSpecialPage = isSignUpPage || isQuestionnairePage || pathname === '/post-questionnaire' || pathname === '/offregester' || pathname === '/privatehome' || isEducationHubPage || isCommunityPage || isJoinPage
  const isHomePage = pathname === '/home' || pathname === '/' || pathname === '/privatehome'
  const filteredNavLinks = isHomePage ? navLinks?.filter(link => link.title.toLowerCase() !== 'home') : navLinks
  const isBgTransparent = isJoinPage || !isScrolled
  const useDarkText = isScrolled || isSignUpPage || isEducationHubPage || pathname === '/post-questionnaire' || pathname === '/offregester' || isCommunityPage
  
  const getContactLink = () => {
    if (pathname === '/privatehome') {
      return '/join?tab=contact&showLogin=true'
    }
    return (isEducationHubPage || isCommunityPage) ? '/join?tab=contact&from=private' : (contactLink || '/join?tab=contact')
  }

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${isBgTransparent ? 'bg-transparent' : 'bg-[#C1B59E] dark:bg-gray-900 shadow-lg'}`}
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {!isBgTransparent && (
          <motion.div
            className="w-full h-full"
            style={{
              background: 'linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%)',
              backgroundSize: '200% 100%',
            }}
            animate={{ backgroundPosition: ['200% 0%', '-200% 0%'] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        )}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link href={homeLink || '/home'} className="flex items-center group">
              <motion.div
                animate={{ y: [-1, 1, -1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src={urlFor(logo).width(200).url()}
                  alt="Logo"
                  width={180}
                  height={60}
                  className="h-16 w-auto transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
            </Link>
          </div>

          {!isJoinPage && (
            <div className={`hidden md:flex flex-1 items-center ${isSpecialPage ? 'justify-end' : 'justify-between'} ml-8`}>
              {!isSpecialPage && (
                <motion.div
                  className="relative group"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="relative">
                    <input
                      type="search"
                      placeholder="Search..."
                      className={`rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-white/50 w-56 transition-all duration-300 focus:w-72 ${useDarkText ? 'bg-white/20 text-black placeholder-gray-700 group-hover:bg-white/40 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400' : 'bg-white/10 text-white placeholder-gray-300 group-hover:bg-white/20'}`}
                    />
                    <svg className={`w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 ${useDarkText ? 'text-gray-700 dark:text-gray-400' : 'text-gray-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                </motion.div>
              )}

              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center space-x-8">
                  {filteredNavLinks?.map(item => (
                    <Link key={item._key} href={item.link} className={`font-medium transition-colors ${useDarkText ? 'text-gray-800 hover:text-black' : 'text-white hover:text-gray-300'}`}>
                      {item.title}
                    </Link>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  {isLoggedIn ? (
                    <button
                      onClick={() => signOut({ callbackUrl: '/privatehome' })}
                      className={`px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 ${useDarkText ? 'bg-black text-white hover:bg-gray-800 dark:bg-gray-700' : 'bg-white text-black hover:bg-gray-200'}`}
                    >
                      Logout
                    </button>
                  ) : (
                    loginText && pathname === '/privatehome' && (
                      <Link href={`${loginLink || '#'}&showLogin=true`} className={`px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 ${useDarkText ? 'bg-black text-white hover:bg-gray-800 dark:bg-gray-700' : 'bg-white text-black hover:bg-gray-200'}`}>
                        {loginText}
                      </Link>
                    )
                  )}

                  {isLoggedIn && !isCommunityPage && (
                    <Link href="/community" className={`px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 ${useDarkText ? 'bg-black text-white hover:bg-gray-800 dark:bg-gray-700' : 'bg-white text-black hover:bg-gray-200'}`}>
                      Community
                    </Link>
                  )}

                  {signUpText && !isSpecialPage && (
                    <Link href={signUpLink || '#'} className={`px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 ${useDarkText ? 'bg-black text-white hover:bg-gray-800 dark:bg-gray-700' : 'bg-white text-black hover:bg-gray-200'}`}>
                      {signUpText}
                    </Link>
                  )}

                  {isSpecialPage && !isHomePage && (
                    <Suspense fallback={<div></div>}>
                      <DynamicHomeLinkComponent homeLink={homeLink}>
                        {(link) => (
                          <Link href={link} className={`px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 ${useDarkText ? 'bg-black text-white hover:bg-gray-800 dark:bg-gray-700' : 'bg-white text-black hover:bg-gray-200'}`}>Home</Link>
                        )}
                      </DynamicHomeLinkComponent>
                    </Suspense>
                  )}

                  {contactText && (
                    <Link href={getContactLink()} className={`px-5 py-2 font-semibold rounded-lg border-2 shadow-sm transition-all duration-300 ${useDarkText ? 'border-black text-black hover:bg-black hover:text-white dark:border-gray-600 dark:text-white dark:hover:bg-gray-700' : 'border-white text-white hover:bg-white hover:text-black'}`}>
                      {contactText}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}

          {isJoinPage && ( // This block now handles both mobile and desktop for the /join page
            <div className="flex items-center">
              <Suspense fallback={<div></div>}>
                <DynamicHomeLinkComponent homeLink={homeLink}>
                  {(link) => (
                    <Link href={link} className={`px-4 sm:px-5 py-2 text-sm sm:text-base rounded-full font-semibold transition-transform duration-300 hover:scale-105 ${useDarkText ? 'bg-black text-white hover:bg-gray-800 dark:bg-gray-700' : 'bg-white text-black hover:bg-gray-200'}`}>Home</Link>
                  )}
                </DynamicHomeLinkComponent>
              </Suspense>
            </div>
          )}

          {!isJoinPage && <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`relative z-[101] focus:outline-none ${useDarkText ? 'text-gray-800 hover:text-black dark:text-white' : 'text-white hover:text-gray-300'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
            </button>
          </div>}

        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#C1B59E] dark:bg-gray-900 md:hidden"
            id="mobile-menu"
          >
            <div className="flex h-full flex-col items-center justify-center space-y-6 pt-24 pb-8 px-4 overflow-y-auto">
              {filteredNavLinks?.map((item) => (
                <Link
                  key={item._key}
                  href={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-lg px-4 py-2 text-2xl font-medium transition-all duration-300 hover:text-black dark:hover:text-white ${
                    pathname === item.link ? 'bg-black/10 dark:bg-white/10 text-black dark:text-white scale-105' : 'text-gray-800 dark:text-gray-300'
                  } `}
                >
                  {item.title}
                </Link>
              ))}

              <div className="flex flex-col items-center space-y-6">
                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      signOut({ callbackUrl: '/privatehome' });
                      setIsMenuOpen(false);
                    }}
                    className="px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 bg-black text-white hover:bg-gray-800 dark:bg-gray-700"
                  >
                    Logout
                  </button>
                ) : (
                  loginText && pathname === '/privatehome' && (
                    <Link href={`${loginLink || '#'}&showLogin=true`} onClick={() => setIsMenuOpen(false)} className="px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 bg-black text-white hover:bg-gray-800 dark:bg-gray-700">
                      {loginText}
                    </Link>
                  )
                )}

                {isLoggedIn && !isCommunityPage && (
                  <Link href="/community" onClick={() => setIsMenuOpen(false)} className="px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 bg-black text-white hover:bg-gray-800 dark:bg-gray-700">
                    Community
                  </Link>
                )}

                {signUpText && !isSpecialPage && (
                  <Link href={signUpLink || '#'} onClick={() => setIsMenuOpen(false)} className="px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 bg-black text-white hover:bg-gray-800 dark:bg-gray-700">
                    {signUpText}
                  </Link>
                )}

                {isSpecialPage && !isHomePage && (
                  <Suspense fallback={<div></div>}>
                    <DynamicHomeLinkComponent homeLink={homeLink}>
                      {(link) => (
                        <Link href={link} onClick={() => setIsMenuOpen(false)} className="px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 bg-black text-white hover:bg-gray-800 dark:bg-gray-700">Home</Link>
                      )}
                    </DynamicHomeLinkComponent>
                  </Suspense>
                )}

                {contactText && (
                  <Link href={getContactLink()} onClick={() => setIsMenuOpen(false)} className="px-5 py-2 font-semibold rounded-lg border-2 shadow-sm transition-all duration-300 border-black text-black hover:bg-black hover:text-white dark:border-gray-600 dark:text-white dark:hover:bg-gray-700">
                    {contactText}
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>









  )
}
