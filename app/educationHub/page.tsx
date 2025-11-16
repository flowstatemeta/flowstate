import { client } from '@/sanity.client'
import { groq } from 'next-sanity'
import Link from 'next/link'
import TopNavigation from '@/components/TopNavigation'
import Footer from '@/components/Footer'
import SocialHandles from '@/components/SocialHandles'
import { motion } from 'framer-motion'

// --- TypeScript Interfaces ---
interface EducationCategory {
  _id: string
  title: string
  description?: string
  slug: {
    current: string
  }
}

// --- Sanity Queries ---
const educationCategoriesQuery = groq`*[_type == "educationCategory"] | order(orderRank asc, title asc)`
const navigationQuery = groq`*[_type == "navigation"][0]`
const socialHandlesQuery = groq`*[_type == "socialHandles"][0]`
const footerQuery = groq`*[_type == "footer"][0]`

export default async function EducationHubPage() {
  // Fetch all necessary data in parallel
  const [categories, navigationData, socialHandlesData, footerData] =
    await Promise.all([
      client.fetch<EducationCategory[]>(educationCategoriesQuery),
      client.fetch(navigationQuery),
      client.fetch(socialHandlesQuery),
      client.fetch(footerQuery),
    ])

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: '#FFF8DC' }}
    >
      {navigationData && <TopNavigation data={navigationData} />}
      <main className="relative flex-grow pt-32">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
            Education Hub
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Choose your path and start learning.
          </p>

          <div className="mt-16 flex flex-col items-center gap-6">
            {categories?.map((category) => (
              <Link
                key={category._id}
                href={`/educationHub/${category.slug.current}`}
                className="group relative inline-block w-full max-w-md overflow-hidden rounded-lg border-2 border-black bg-white px-8 py-4 text-center font-bold text-black shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <div className="absolute inset-0 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></div>
                <span className="relative text-xl transition-colors duration-300 ease-in-out group-hover:text-white">{category.title}</span>
              </Link>
            ))}
          </div>
        </div>
        {socialHandlesData && <div className="mt-24"><SocialHandles data={socialHandlesData} /></div>}
      </main>
      {footerData && <Footer data={footerData} />}
    </div>
  )
}