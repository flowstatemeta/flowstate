'use client'

import Image from 'next/image'
import Link from 'next/link'
import {urlFor} from '@/lib/urlFor'

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
  sellerName: string
  sellerImage: any // Can be an image object or null
}

interface MarketplaceClientProps {
  items: MarketplaceItem[]
}

export default function MarketplaceClient({items}: MarketplaceClientProps) {
  return (
    <>
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight">Marketplace</h1>
        <p className="mt-2 text-lg text-gray-600">Discover items from the FlowState community</p>
      </header>
      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map((item) => (
            <Link
              href={`/marketplace/${item._id}`} // Link to a future detail page
              key={item._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-56 w-full">
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
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-16">No items are currently listed in the marketplace. Check back soon!</p>
      )}
    </>
  )
}