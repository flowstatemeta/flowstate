'use client'

import {useState} from 'react'
import {useRouter} from 'next/navigation'
import {client} from '@/lib/sanity.client' // Assuming a client-side client export exists

// Define the shape of the image asset reference from Sanity
interface SanityImageAsset {
  _type: 'image'
  asset: {
    _type: 'reference'
    _ref: string
  }
}

export default function CreateItemForm({userPackage}: {userPackage: string | null}) {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImages] = useState<SanityImageAsset[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  // Show a message if the user doesn't have the premium package
  if (userPackage !== 'premium') {
    return (
      <div className="p-4 text-center border rounded-lg bg-gray-50">
        <h3 className="text-lg font-semibold">Premium Feature</h3>
        <p className="text-gray-600">
          Only users with the Premium ($2500) package can list items in the marketplace.
        </p>
      </div>
    )
  }

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files || files.length === 0) return

    setIsUploading(true)
    setError(null)

    try {
      const uploadedImages: SanityImageAsset[] = await Promise.all(
        Array.from(files).map(async (file) => {
          // Upload the asset to Sanity
          const asset = await client.assets.upload('image', file)
          // Return it in the format our schema expects
          return {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: asset._id,
            },
          }
        }),
      )
      setImages((prevImages) => [...prevImages, ...uploadedImages])
    } catch (err) {
      console.error('Image upload error:', err)
      setError('Failed to upload image(s). Please try again.')
    } finally {
      setIsUploading(false)
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError(null)
    setMessage(null)

    if (!title || !price || images.length === 0) {
      setError('Title, price, and at least one image are required.')
      return
    }

    const response = await fetch('/api/marketplace/create', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title,
        price: parseFloat(price),
        description,
        images,
      }),
    })

    if (response.ok) {
      setMessage('Your item has been listed successfully!')
      router.push('/marketplace')
      router.refresh() // Refresh server components to show the new item
    } else {
      const result = await response.json()
      setError(result.message || 'An unknown error occurred.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-8 border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold">List a New Item</h2>
      {error && <div className="p-3 text-red-800 bg-red-100 rounded-md">{error}</div>}
      {message && <div className="p-3 text-green-800 bg-green-100 rounded-md">{message}</div>}

      {/* Form Fields */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price ($)</label>
        <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required min="0" step="0.01" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>

      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Images</label>
        <input type="file" onChange={handleImageUpload} multiple accept="image/*" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
        {isUploading && <p className="text-sm text-gray-500 mt-2">Uploading...</p>}
        <div className="mt-4 flex flex-wrap gap-4">
          {images.map((img, index) => (
            <div key={index} className="w-24 h-24 border rounded-md overflow-hidden">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs">Image {index + 1}</div>
            </div>
          ))}
        </div>
      </div>

      <button type="submit" disabled={isUploading} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400">
        {isUploading ? 'Uploading...' : 'List My Item'}
      </button>
    </form>
  )
}
