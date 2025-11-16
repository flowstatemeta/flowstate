import Footer from '@/components/Footer'
import TopNavigation from '@/components/TopNavigation'
import OfficialRegisterForm from '@/components/OfficialRegisterForm'
import { client } from '@/sanity.client'
import { groq } from 'next-sanity'

export const dynamic = 'force-dynamic'


const officialRegisterQuery = groq`*[_type == "officialRegisterPage"][0]`
const navigationQuery = groq`*[_type == "navigation"][0]`
const footerQuery = groq`*[_type == "footer"][0]`

export default async function OfficialRegisterPage() {
  const [pageData, navigationData, footerData] = await Promise.all([
    client.fetch(officialRegisterQuery),
    client.fetch(navigationQuery),
    client.fetch(footerQuery),
  ])

  if (!pageData) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-xl text-gray-600">Page content not found.</p>
      </div>
    )
  }

  return (
    <div
      className="grid grid-rows-[auto_1fr_auto] min-h-screen"
      style={{ backgroundColor: '#FFF8DC' }}
    >
      {navigationData && <TopNavigation data={navigationData} />}
      <main className="relative flex items-center justify-center pt-24 pb-24">
        <OfficialRegisterForm {...pageData} />
      </main>
      {footerData && <Footer data={footerData} />}
    </div>
  )
}