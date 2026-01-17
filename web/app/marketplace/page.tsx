import {sanityClient} from '@/lib/sanity.server' // Assuming your client is here
import {groq} from 'next-sanity'
import Image from 'next/image'
import {urlFor} from '@/lib/urlFor' // Corrected path based on project structure
import {CheckBadgeIcon} from '@heroicons/react/24/solid'
import TopNavigation from '@/components/TopNavigation'
import Footer from '@/components/Footer'

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
  isVerified?: boolean
  sellerIsVerified?: boolean
  sellerName: string
  sellerImage: any // Can be an image object or null
}

// The GROQ query to fetch active marketplace items and seller info
const marketplaceQuery = groq`*[_type == "marketplaceItem" && status == "active"] | order(seller->isPremium desc, _createdAt desc) {
  _id,
  title,
  price,
  description,
  "mainImage": images[0],
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

  const verifiedItems = items.filter((item) => item.sellerIsVerified || item.isVerified)
  const standardItems = items.filter((item) => !item.sellerIsVerified && !item.isVerified)

  return (
    <div className="flex flex-col min-h-screen" style={{backgroundColor: '#FFF8DC'}}>
      {navigationData && <TopNavigation data={navigationData} />}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight">Marketplace</h1>
          <p className="mt-2 text-lg text-gray-600">Discover items from the FlowState community</p>
        </header>
        {items.length > 0 ? (
          <div className="space-y-12">
            {[verifiedItems, standardItems].map(
              (groupItems, groupIndex) =>
                groupItems.length > 0 && (
                  <div key={groupIndex} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {groupItems.map((item) => (
                      <div
                        key={item._id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-all duration-300"
                      >
                        <div className="relative h-56 w-full">
                          {(item.sellerIsVerified || item.isVerified) && (
                            <div className="absolute top-2 right-2 z-10 flex items-center bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                              <CheckBadgeIcon className="w-4 h-4 mr-1" />
                              Verified
                            </div>
                          )}
                          <Image src={urlFor(item.mainImage).url()} alt={item.title} layout="fill" objectFit="cover" />
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                          <h2 className="text-xl font-bold text-gray-800 truncate group-hover:text-indigo-600 transition-colors">
                            {item.title}
                          </h2>
                          <p className="text-sm text-gray-500 mt-1 flex-grow">{item.description}</p>
                          <p className="text-3xl font-extrabold text-gray-900 my-4">${item.price.toFixed(2)}</p>
                          <div className="flex items-center mt-auto pt-4 border-t border-gray-200">
                            {item.sellerImage && (
                              <Image src={urlFor(item.sellerImage).width(40).height(40).url()} alt={item.sellerName} width={40} height={40} className="rounded-full mr-3" />
                            )}
                            <p className="text-sm font-medium text-gray-700">Sold by {item.sellerName}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
            )}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-16">No items are currently listed in the marketplace. Check back soon!</p>
        )}
      </main>
      {footerData && <Footer data={footerData} />}
    </div>
  )
}

// Revalidate the page every 60 seconds to fetch new items
export const revalidate = 60