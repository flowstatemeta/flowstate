import {createClient} from 'next-sanity'

// These details are needed to connect to your Sanity project
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-05-01'

// This is the server-side client. It's used in API routes and server components.
// useCdn: false ensures you always get the freshest data.
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})