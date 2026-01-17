import { client } from '@/sanity.client'
import { groq } from 'next-sanity'
import { IntroPage } from '@/components/IntroPage'

export const dynamic = 'force-dynamic'

const introPageQuery = groq`*[_type == "introPage"][0]`

async function getIntroPageData() {
  return client.fetch(introPageQuery)
}

export default async function Page() {
  const introData = await getIntroPageData()

  if (!introData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Intro page data could not be loaded. Please configure it in Sanity Studio.</p>
      </div>
    )
  }

  return <IntroPage data={introData} />
}
