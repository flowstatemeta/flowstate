import Footer from '@/components/Footer'
import TopNavigation from '@/components/TopNavigation'
import PostQuestionnaireClient from '@/components/PostQuestionnaireClient'
import { client } from '@/sanity.client'
import { groq } from 'next-sanity'

export const dynamic = 'force-dynamic'


const postQuestionnaireQuery = groq`*[_type == "postQuestionnairePage"][0]{
  ...,
  video {
    asset->{playbackId}
  }
}`
const navigationQuery = groq`*[_type == "navigation"][0]`
const footerQuery = groq`*[_type == "footer"][0]`

export default async function PostQuestionnairePage() {
  const [pageData, navigationData, footerData] = await Promise.all([
    client.fetch(postQuestionnaireQuery),
    client.fetch(navigationQuery),
    client.fetch(footerQuery),
  ])

  // --- Debugging Test ---
  console.log('Fetched Post-Questionnaire Page Data:', JSON.stringify(pageData, null, 2))

  if (!pageData) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-xl text-gray-600">Page content not found.</p>
      </div>
    )
  }

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: '#FFF8DC' }}
    >
      {navigationData && <TopNavigation data={navigationData} />}
      <PostQuestionnaireClient {...pageData} />
      {footerData && <Footer data={footerData} />}
    </div>
  )
}