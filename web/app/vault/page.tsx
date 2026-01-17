import React from 'react'
import Link from 'next/link'
import {getServerSession} from 'next-auth'
import {redirect} from 'next/navigation'
import {createClient} from 'next-sanity'
import VaultButtons from '@/components/VaultButtons'

// Adjust these imports based on your actual project structure for client/auth
// import { authOptions } from '@/app/api/auth/[...nextauth]/route' 

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'r96iva8u'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

interface VaultData {
  title: string
  description: string
  buttons: Array<{
    label: string
    url: string
    _key: string
  }>
}

async function getVaultData(): Promise<VaultData | null> {
  return client.fetch(`*[_type == "vault"][0]{
    title,
    description,
    buttons
  }`)
}

export default async function VaultPage() {
  // 1. Protect the route (Uncomment and adjust authOptions import if needed)
  const session = await getServerSession()
  if (!session) {
    // redirect('/api/auth/signin') // Redirect to login if not authenticated
  }

  // 2. Fetch Data in parallel
  const data = await getVaultData()

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <p className="text-gray-500">Loading Vault content...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: '#FFF8DC' }}>
      <main className="max-w-4xl mx-auto p-6 md:p-12 pt-12">
      <div className="flex flex-col gap-8 ">
        {/* Back Button */}
        <div className="flex justify-start">
          <Link href="/privatehome" className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-gray-700 to-black px-6 py-2 text-sm font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            &larr; Back to Private Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{data.title}</h1>
          {data.description && (
            <p className="text-lg text-black max-w-2xl mx-auto">
              {data.description}
            </p>
          )}
        </div>

        {/* Animated Buttons Grid */}
        <VaultButtons buttons={data.buttons} />
      </div>
    </main>
    </div>
  )
}