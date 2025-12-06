import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: {
    signIn: '/privatehome', // Redirect users to the privatehome page to log in
  },
})

// This config specifies which routes to protect.
export const config = {
  // The /privatehome page is the login page, so it should NOT be protected.
  // Only protect routes that require a user to be logged in.
  matcher: ['/educationHub/:path*'],
}