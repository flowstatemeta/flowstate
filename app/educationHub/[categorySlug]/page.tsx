import { client } from '@/sanity.client'
import { groq } from 'next-sanity'
import Link from 'next/link'
import TopNavigation from '@/components/TopNavigation'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export const dynamic = 'force-dynamic'

// --- TypeScript Interfaces ---
interface EducationCategory {
  title: string
}

interface EducationLesson {
  _id: string
  title: string
  slug: {
    current: string
  }
}

// --- Sanity Queries ---
const categoryQuery = groq`*[_type == "educationCategory" && slug.current == $slug][0]{ title }`
const lessonsQuery = groq`*[_type == "educationLesson" && category->slug.current == $slug] | order(title asc){
  _id,
  title,
  slug
}`
const navigationQuery = groq`*[_type == "navigation"][0]`
const footerQuery = groq`*[_type == "footer"][0]`

export default async function CategoryLessonsPage({ params }: any) {
  const { categorySlug } = params

  // Fetch all necessary data in parallel
  const [category, lessons, navigationData, footerData] = await Promise.all([
    client.fetch<EducationCategory>(categoryQuery, { slug: categorySlug }),
    client.fetch<EducationLesson[]>(lessonsQuery, { slug: categorySlug }),
    client.fetch(navigationQuery),
    client.fetch(footerQuery),
  ])

  console.log(`[CategoryLessonsPage] Fetching for categorySlug: ${categorySlug}`);
  console.log('[CategoryLessonsPage] Fetched category:', category);
  console.log('[CategoryLessonsPage] Fetched lessons:', lessons);
  // If no category is found for the slug, show a 404 page
  if (!category) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#FFF8DC' }}>
      {navigationData && <TopNavigation data={navigationData} />}
      <main className="relative flex-grow pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/educationHub" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8">
            <ArrowLeftIcon className="h-5 w-5" />
            Back to Categories
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center">{category.title}</h1>
          <p className="mt-4 text-lg text-gray-600 text-center">Select a lesson to begin.</p>

          <div className="mt-16 flex flex-col items-center gap-6">
            {lessons?.map((lesson) => (
              <Link
                key={lesson._id}
                href={`/educationHub/${categorySlug}/${lesson.slug.current}`}
                className="group relative inline-block w-full max-w-md overflow-hidden rounded-lg border-2 border-black bg-white px-8 py-4 text-center font-bold text-black shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <div className="absolute inset-0 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></div>
                <span className="relative text-xl transition-colors duration-300 ease-in-out group-hover:text-white">{lesson.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      {footerData && <Footer data={footerData} />}
    </div>
  )
}
