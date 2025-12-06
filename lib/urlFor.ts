import imageUrlBuilder from '@sanity/image-url'
import {client} from './sanity.client' // We'll use the client-side config for this

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Note: You will need to ensure a 'sanity.client.ts' file exists in this same directory
// that exports a 'client' instance for this to work.