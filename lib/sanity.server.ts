import { createClient }from 'next-sanity'

if (!process.env.SANITY_API_WRITE_TOKEN) {
  throw new Error('Missing SANITY_API_WRITE_TOKEN environment variable')
}

export const sanityClient = createClient({
  projectId: 'r96iva8u',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Must be false to ensure fresh data
  token: process.env.SANITY_API_WRITE_TOKEN,
})