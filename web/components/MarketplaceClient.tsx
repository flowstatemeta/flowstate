'use client'

import Image from 'next/image'
import {CheckBadgeIcon} from '@heroicons/react/24/solid'
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'
import {urlFor} from '@/lib/urlFor'
import useEmblaCarousel from 'embla-carousel-react'
import {useCallback} from 'react'

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
  sellerIsVerified?: boolean // Added to check the Seller's premium status
  sellerName: string
  sellerImage: any // Can be an image object or null
}

interface MarketplaceClientProps {
  items: MarketplaceItem[]
}

function ImageCarousel({images, title}: {images: any[]; title: string}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true})

  const scrollPrev = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      if (emblaApi) emblaApi.scrollPrev()
    },
    [emblaApi],
  )

  const scrollNext = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      if (emblaApi) emblaApi.scrollNext()
    },
    [emblaApi],
  )

  if (!images || images.length === 0) return null

  if (images.length === 1) {
    return (
      <div className="relative h-56 w-full">
        <Image src={urlFor(images[0]).url()} alt={title} fill className="object-cover" />
      </div>
    )
  }

  return (
    <div className="relative h-56 w-full group/carousel">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((img, index) => (
            <div className="relative flex-[0_0_100%] h-full min-w-0" key={index}>
              <Image src={urlFor(img).url()} alt={`${title} - ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-30 hover:bg-black/70 transition-colors backdrop-blur-sm" onClick={scrollPrev}>
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-30 hover:bg-black/70 transition-colors backdrop-blur-sm" onClick={scrollNext}>
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  )
}

export default function MarketplaceClient({items}: MarketplaceClientProps) {
  const verifiedItems = items.filter((item) => item.sellerIsVerified || item.isVerified)
  const standardItems = items.filter((item) => !item.sellerIsVerified && !item.isVerified)

  return (
    <>
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight">Marketplace</h1>
        <p className="mt-2 text-lg text-gray-600">Discover items from the FlowState community</p>
      </header>
      {items.length > 0 ? (
        <div className="space-y-12">
          {[verifiedItems, standardItems].map((groupItems, groupIndex) =>
            groupItems.length > 0 && (
              <div key={groupIndex} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {groupItems.map((item) => {
                  const displayImages = item.images && item.images.length > 0 ? item.images : [item.mainImage]
                  return (
                    <Link
                      href={`/marketplace/${item._id}`} // Link to a future detail page
                      key={item._id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-all duration-300"
                    >
                      <div className="relative w-full">
                        {(item.sellerIsVerified || item.isVerified) && (
                          <div className="absolute top-2 right-2 z-10 flex items-center bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            <CheckBadgeIcon className="w-4 h-4 mr-1" />
                            Verified
                          </div>
                        )}
                        <ImageCarousel images={displayImages} title={item.title} />
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
                  )
                })}
              </div>
            )
          )}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-16">No items are currently listed in the marketplace. Check back soon!</p>
      )}
    </>
  )
}