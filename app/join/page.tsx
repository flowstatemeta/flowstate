import UnifiedAuthForm from '@/components/UnifiedAuthForm'
import TopNavigation from '@/components/TopNavigation'
import { client } from '@/sanity.client'
import { groq } from 'next-sanity'

export const dynamic = 'force-dynamic'

const navigationQuery = groq`*[_type == "navigation"][0]`

export default async function JoinPage() {
  const navigationData = await client.fetch(navigationQuery)

  return (
    <div
      className="bg-gray-900"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      {navigationData && <TopNavigation data={navigationData} />}
      <main className="relative flex-grow flex items-center justify-center">
        <UnifiedAuthForm />
      </main>
    </div>
  )
}
