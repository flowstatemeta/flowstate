import { urlFor } from '@/lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

export interface IntroPageData {
  _id: string
  heading: string
  heading2?: string
  description?: string
  backgroundImage: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  logo?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  logoTopLeft?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  buttonText: string
  buttonLink: string
}

export default function IntroPage({ data }: { data: IntroPageData }) {
  const {
    heading,
    heading2,
    description,
    backgroundImage,
    logo,
    logoTopLeft,
    buttonText,
    buttonLink,
  } = data

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <Image
          src={urlFor(backgroundImage).url()}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
      )}

      {/* Overlay to darken the background for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center p-4">
        {/* Top Left Logo */}
        {logoTopLeft && (
          <div className="absolute top-4 left-4 md:top-8 md:left-8">
            <Image
              src={urlFor(logoTopLeft).url()}
              alt="Top Left Logo"
              width={100}
              height={100}
              className="h-12 w-auto md:h-16"
            />
          </div>
        )}

        {/* Top Right Logo */}
        {logo && (
          <div className="absolute top-4 right-4 md:top-8 md:right-8">
            <Image
              src={urlFor(logo).url()}
              alt="Top Right Logo"
              width={100}
              height={100}
              className="h-12 w-auto md:h-16"
            />
          </div>
        )}

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{heading}</h1>
          {heading2 && <h2 className="text-2xl md:text-4xl mb-6">{heading2}</h2>}
        </div>

        {/* Bottom Content */}
        <div className="pb-16">
          {description && <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">{description}</p>}
          <Link href={buttonLink} passHref legacyBehavior>
            <a className="bg-white text-black font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition-colors duration-300">{buttonText}</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
