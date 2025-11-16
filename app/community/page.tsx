import { client } from '@/sanity.client'
import { groq } from 'next-sanity'
import TopNavigation from '@/components/TopNavigation'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import CommunityClient from '@/components/CommunityClient'


// --- TypeScript Interfaces ---
interface CommunityPageData {
  heading: string
  description?: string
}

interface CommunityComment {
  _id: string
  comment: string
  _createdAt: string
  author: { name: string }
  keywords?: string[]
  lesson?: {
    title: string
    slug: { current: string }
    category: { slug: { current: string } }
  }
}

// --- Sanity Queries ---
const communityPageQuery = groq`*[_type == "communityPage"][0]`
const allCommentsQuery = groq`*[_type == "lessonComment" && approved == true] | order(_createdAt desc){
  _id,
  comment,
  _createdAt,
  keywords,
  author->{
    name
  },
  lesson->{
    title,
    slug { current },
    category->{ slug { current } }
  }
}`
const navigationQuery = groq`*[_type == "navigation"][0]`
const footerQuery = groq`*[_type == "footer"][0]`

export default async function CommunityPage() {
  const [pageData, comments, navigationData, footerData] = await Promise.all([
    client.fetch<CommunityPageData>(communityPageQuery),
    client.fetch<CommunityComment[]>(allCommentsQuery),
    client.fetch(navigationQuery),
    client.fetch(footerQuery),
  ])

  if (!pageData) {
    notFound()
  }

  // Function to trigger revalidation for comments
  const handleCommentSubmitted = async () => {
    'use server'
    revalidatePath('/community', 'page')
  }

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#FFF8DC' }}>
      {navigationData && <TopNavigation data={navigationData} />}
      <CommunityClient pageData={pageData} initialComments={comments} onCommentSubmitted={handleCommentSubmitted}/>
      {footerData && <Footer data={footerData} />}
    </div>
  )
}
