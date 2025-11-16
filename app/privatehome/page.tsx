import HeroSection from '@/components/HeroSection'
import PrivateHeroClient from '@/components/PrivateHeroClient'
import EducationHubPreview from '@/components/EducationHubPreview'
import Footer from '@/components/Footer'
import TopNavigation from '@/components/TopNavigation'
import EnterHub from '@/components/EnterHub'
import SocialHandles from '@/components/SocialHandles'
import { client } from '@/sanity.client'
import { groq } from 'next-sanity'

const privateHeroSectionQuery = groq`*[_type == "privateHeroSection"][0]`
const navigationQuery = groq`*[_type == "navigation"][0]`
const enterHubQuery = groq`*[_type == "enterHub"][0]`
const educationHubPreviewQuery = groq`*[_type == "educationHubPreview"][0]`
const socialHandlesQuery = groq`*[_type == "socialHandles"][0]`
const footerQuery = groq`*[_type == "footer"][0]`

export const dynamic = 'force-dynamic'

export default async function PrivateHomePage() {
  // Fetch all page data in parallel
  const [
    heroData,
    navigationData,
    enterHubData,
    educationHubData,
    socialHandlesData,
    footerData,
  ] = await Promise.all([
    client.fetch(privateHeroSectionQuery),
    client.fetch(navigationQuery),
    client.fetch(enterHubQuery),
    client.fetch(educationHubPreviewQuery),
    client.fetch(socialHandlesQuery),
    client.fetch(footerQuery),
  ])

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#FFF8DC' }}>
      {navigationData && <TopNavigation data={navigationData} />}
      <main className="relative flex-grow">
        {heroData && (
          <HeroSection data={heroData}>
            <PrivateHeroClient data={heroData} />
          </HeroSection>
        )}
        {educationHubData && <EducationHubPreview data={educationHubData} />}
        {enterHubData && <EnterHub data={enterHubData} />}
        {socialHandlesData && <SocialHandles data={socialHandlesData} />}
      </main>
      {footerData && <Footer data={footerData} />}
    </div>
  )
}