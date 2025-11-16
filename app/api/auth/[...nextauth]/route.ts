import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { client } from '../../../../sanity.client' // Adjust path as needed
import { groq } from 'next-sanity'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials provided
        // In a real app, you would hash and compare passwords securely.
        // For now, we'll check if the username exists in Sanity.

        if (!credentials?.username || !credentials?.password) {
          return null // No credentials provided
        }

        const userProfile = await client.fetch(
          groq`*[_type == "user" && username == $username][0]{..., "hashedPassword": hashedPassword}`,
          { username: credentials.username }
        )

        if (userProfile && userProfile.hashedPassword) {
          // Use bcrypt to securely compare the provided password with the stored hash
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            userProfile.hashedPassword
          );

          if (isPasswordValid) {
            // Any object returned will be saved in `user` property of the JWT and Session
            return {
              id: userProfile._id, // Use the Sanity document ID for the session
              name: userProfile.name,
              username: userProfile.username,
              // You can add other profile data here
            }
          }
        }

        // If you return null or false then the credentials will be rejected
        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.username = user.username // Now TypeScript knows this property exists
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
        session.user.username = token.username as string
      }
      return session
    },
  },
  pages: {
    signIn: '/join?tab=login', // Custom sign-in page
  },
  secret: process.env.NEXTAUTH_SECRET, // You MUST set this in your .env.local
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
