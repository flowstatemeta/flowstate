import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { sanityClient } from '@/lib/sanity.server'
import { groq } from 'next-sanity'
import bcrypt from 'bcryptjs'
import { rotateUserSession, validateUserSession } from '@/app/actions/sessionHelpers'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) {
          return null
        }

        const userProfile = await sanityClient.fetch(
          groq`*[_type == "user" && username == $username][0]{..., "hashedPassword": hashedPassword}`,
          { username: credentials.username }
        )

        if (userProfile && userProfile.hashedPassword) {
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            userProfile.hashedPassword
          );

          if (isPasswordValid) {
            // Rotate session token on successful login
            const sessionToken = await rotateUserSession(userProfile._id)
            return {
              id: userProfile._id,
              name: userProfile.name,
              username: userProfile.username,
              sessionToken,
            }
          }
        }
        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.username = user.username
        token.sessionToken = (user as any).sessionToken
      }
      return token
    },
    async session({ session, token }) {
      // Validate session token to ensure single device login
      if (token && token.id && token.sessionToken) {
        const isValid = await validateUserSession(token.id as string, token.sessionToken as string)
        if (!isValid) {
          return null as any // Force sign out if session is invalid
        }
      }

      if (token) {
        session.user.id = token.id as string
        session.user.username = token.username as string
      }
      return session
    },
  },
  pages: {
    signIn: '/join?tab=login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
