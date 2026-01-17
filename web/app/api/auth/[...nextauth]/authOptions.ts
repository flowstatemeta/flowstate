import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { client } from '../../../../sanity.client' // Adjust path as needed
import { groq } from 'next-sanity'
import bcrypt from 'bcryptjs'

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

        const userProfile = await client.fetch(
          groq`*[_type == "user" && username == $username][0]{..., "hashedPassword": hashedPassword}`,
          { username: credentials.username }
        )

        if (userProfile && userProfile.hashedPassword) {
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            userProfile.hashedPassword
          );

          if (isPasswordValid) {
            return {
              id: userProfile._id,
              name: userProfile.name,
              username: userProfile.username,
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
    signIn: '/join?tab=login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
