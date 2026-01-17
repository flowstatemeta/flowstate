import {NextAuthOptions} from 'next-auth'
// TODO: Import your authentication providers from next-auth/providers
// import GoogleProvider from 'next-auth/providers/google'

/**
 * Your NextAuth.js configuration options. This is the single source of truth.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers.
  // You should move your providers from `pages/api/auth/[...nextauth].ts` here.
  providers: [
    // Example:
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
  ],
  // You can add custom pages, callbacks, and other options here.
  // callbacks: { ... }
}