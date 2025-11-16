import HeroSection from '@/components/HeroSection'
import EducationHubPreview from '@/components/EducationHubPreview'
import Footer from '@/components/Footer'
import ServicePreview from '@/components/ServicePreview'
import TopNavigation from '@/components/TopNavigation'
import WhyChooseUs from '@/components/WhyChooseUs'
import SocialHandles from '@/components/SocialHandles' // Import the new component
import Sponsors, {type SponsorsData} from '@/components/Sponsors'
import { client } from '@/sanity.client'
import { groq } from 'next-sanity'

export const dynamic = 'force-dynamic'

const heroSectionQuery = groq`*[_type == "heroSection"][0]`
const navigationQuery = groq`*[_type == "navigation"][0]`
const servicePreviewQuery = groq`*[_type == "servicePreview"][0]`
const whyChooseUsQuery = groq`*[_type == "whyChooseUs"][0]`
const educationHubPreviewQuery = groq`*[_type == "educationHubPreview"][0]`
const socialHandlesQuery = groq`*[_type == "socialHandles"][0]`
const sponsorsQuery = groq`*[_type == "sponsors"][0]`
const footerQuery = groq`*[_type == "footer"][0]`

export default async function HomePage() {
  // Fetch all page data in parallel
  const [heroData, navigationData, servicePreviewData, whyChooseUsData, educationHubData, socialHandlesData, sponsorsData, footerData] = await Promise.all([
    client.fetch(heroSectionQuery),
    client.fetch(navigationQuery),
    client.fetch(servicePreviewQuery),
    client.fetch(whyChooseUsQuery),
    client.fetch(educationHubPreviewQuery),
    client.fetch(socialHandlesQuery),
    client.fetch<SponsorsData>(sponsorsQuery),
    client.fetch(footerQuery),
  ])

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#FFF8DC' }}>
      {navigationData && <TopNavigation data={navigationData} />}
      <main className="relative flex-grow">
        {heroData && <HeroSection data={heroData} />}
        
        {servicePreviewData && <ServicePreview data={servicePreviewData} />}
        {whyChooseUsData && <WhyChooseUs data={whyChooseUsData} />}
        {educationHubData && <EducationHubPreview data={educationHubData} />}
        {sponsorsData && <Sponsors data={sponsorsData} />}
        {socialHandlesData && <SocialHandles data={socialHandlesData} />}
      </main>
      {footerData && <Footer data={footerData} />}
    </div>
  )
}