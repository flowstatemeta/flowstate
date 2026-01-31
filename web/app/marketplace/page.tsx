import {sanityClient} from '@/lib/sanity.server' // Assuming your client is here
import {groq} from 'next-sanity'
import TopNavigation from '@/components/TopNavigation'
import Footer from '@/components/Footer'
import MarketplaceClient from '@/components/MarketplaceClient'

// Define the type for our marketplace items based on the schema
interface MarketplaceItem {
  _id: string
  title: string
  price: number
  description: string
  mainImage: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  images?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }[]
  isVerified?: boolean
  sellerIsVerified?: boolean
  sellerName: string
  sellerImage: any // Can be an image object or null
}

// The GROQ query to fetch active marketplace items and seller info
const marketplaceQuery = groq`*[_type == "marketplaceItem" && status == "active"] | order(seller->isPremium desc, isVerified desc, _createdAt desc) {
  _id,
  title,
  price,
  description,
  "mainImage": images[0],
  images,
  "sellerName": seller->name,
  "sellerImage": seller->image,
  "sellerIsVerified": seller->isPremium,
  isVerified
}`
const navigationQuery = groq`*[_type == "navigation"][0]`
const footerQuery = groq`*[_type == "footer"][0]`

// This is a React Server Component, which can be async
export default async function MarketplacePage() {
  // Fetch all data concurrently
  const [items, navigationData, footerData] = await Promise.all([
    sanityClient.fetch<MarketplaceItem[]>(marketplaceQuery),
    sanityClient.fetch(navigationQuery),
    sanityClient.fetch(footerQuery),
  ])

  return (
    <div className="flex flex-col min-h-screen" style={{backgroundColor: '#FFF8DC'}}>
      {navigationData && <TopNavigation data={navigationData} />}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        <MarketplaceClient items={items} />
      </main>
      {footerData && <Footer data={footerData} />}
    </div>
  )
}

// Revalidate the page every 60 seconds to fetch new items
export const revalidate = 60