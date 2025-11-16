import Countdown from '@/components/Countdown'
import Footer from '@/components/Footer'
import TopNavigation from '@/components/TopNavigation'
import Sponsors, {type SponsorsData} from '@/components/Sponsors'
import { client } from '@/sanity.client'
import { groq } from 'next-sanity'

const navigationQuery = groq`*[_type == "navigation"][0]`
const countdownQuery = groq`*[_type == "countdown"][0]{
  ...,
  video {
    asset->{
      playbackId
    }
  }
}`
const sponsorsQuery = groq`*[_type == "sponsors"][0]`
const footerQuery = groq`*[_type == "footer"][0]`

export default async function SignUpPage() {
  // Fetch all page data in parallel
  const [navigationData, countdownData, footerData] =
    await Promise.all([
      client.fetch(navigationQuery),
      client.fetch(countdownQuery),
      client.fetch(footerQuery),
    ])
  const sponsorsData = await client.fetch<SponsorsData>(sponsorsQuery)

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#FFF8DC' }}>
      {navigationData && <TopNavigation data={navigationData} />}
      <main className="flex-grow">
        <div className="relative flex items-center justify-center py-12">
          {countdownData && <Countdown data={countdownData} />}
        </div>
        {sponsorsData && <Sponsors data={sponsorsData} />}
      </main>
      {footerData && <Footer data={footerData} />}
    </div>
  )
}
