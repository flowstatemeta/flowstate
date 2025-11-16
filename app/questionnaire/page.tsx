import QuestionnaireForm from '@/components/QuestionnaireForm'
import TopNavigation from '@/components/TopNavigation'
import Footer from '@/components/Footer'
import { client } from '@/sanity.client'
import { groq } from 'next-sanity'

// Fetch the first questionnaire document. You could adapt this to fetch a specific one by its title or ID.
const questionnaireQuery = groq`*[_type == "questionnaire"][0]{
  title,
  pages[]{
    _key,
    _type,
    ...
  }
}`

const navigationQuery = groq`*[_type == "navigation"][0]`
const footerQuery = groq`*[_type == "footer"][0]`

export default async function QuestionnairePage() {
  const [questionnaireData, navigationData, footerData] = await Promise.all([
    client.fetch(questionnaireQuery),
    client.fetch(navigationQuery),
    client.fetch(footerQuery),
  ])

  if (!questionnaireData) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-xl text-gray-600">Questionnaire not found.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#FFF8DC' }}>
      {navigationData && <TopNavigation data={navigationData} />}
      <main className="relative flex items-center justify-center flex-grow h-[75vh]">
        <QuestionnaireForm data={questionnaireData} />
      </main>
      {footerData && <Footer data={footerData} />}
    </div>
  )
}