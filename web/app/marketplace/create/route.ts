import {NextRequest, NextResponse} from 'next/server'
import {getServerSession} from 'next-auth' // For App Router Route Handlers, getServerSession is imported directly from 'next-auth'
import {authOptions} from '@/lib/auth' // Correct: Import from the central auth file
import {sanityClient} from '@/lib/sanity.server' // Your server-side Sanity client

export async function POST(req: NextRequest) {
  // 1. Get user session using the server-side friendly `getServerSession`
  // In App Router Route Handlers, getServerSession takes only authOptions
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return NextResponse.json({message: 'Unauthorized: You must be logged in.'}, {status: 401})
  }

  // 2. Fetch the user from Sanity using their auth provider ID to check their package
  const userQuery = `*[_type == "user" && authProviderId == $authProviderId][0]`
  const user = await sanityClient.fetch(userQuery, {
    authProviderId: session.user.id,
  })

  // 4. Validate incoming data
  const body = await req.json() // Get JSON body from NextRequest
  const {title, description, price, images} = body

  if (!title || !price || !images || images.length === 0) {
    return NextResponse.json({message: 'Bad Request: Missing required fields.'}, {status: 400})
  }

  // 5. Create the marketplace item document in Sanity
  // Check if the user has the premium package to set the verified flag.
  const isVerified = user?.package === 'premium'

  try {
    const doc = {
      _type: 'marketplaceItem',
      title,
      description,
      price: Number(price),
      images, // IMPORTANT: Assumes `images` is an array of Sanity image asset references
      seller: {
        _type: 'reference',
        _ref: user._id, // Link the item to the Sanity user document
      },
      status: 'active',
      isVerified: isVerified,
    }

    const createdItem = await sanityClient.create(doc)
    return NextResponse.json({message: 'Item created successfully', data: createdItem}, {status: 201})
  } catch (error) {
    console.error('Error creating marketplace item:', error)
    return NextResponse.json({message: 'Internal Server Error'}, {status: 500})
  }
}

// You can also define other HTTP methods (GET, PUT, DELETE) in the same file
// export async function GET(req: NextRequest) { ... }
// export async function PUT(req: NextRequest) { ... }
// export async function DELETE(req: NextRequest) { ... }