import React from 'react'
import {getServerSession} from 'next-auth'
import {redirect} from 'next/navigation'
import {createClient} from 'next-sanity'
import VaultPageClient from '@/components/VaultPageClient'

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
  // 1. Protect the route
  const session = await getServerSession()
  if (!session) {
    redirect('/')
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

  return <VaultPageClient data={data} />
}