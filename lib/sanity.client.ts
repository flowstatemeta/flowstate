import {createClient} from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'r96iva8u'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

/**
 * The client-side Sanity client.
 * This client is used for fetching data in the browser and for uploading assets.
 * It does not contain any secret tokens.
 */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // `true` for client-side fetching for performance
})