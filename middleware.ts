import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req })
  const { pathname } = req.nextUrl

  // If the user is logged in, redirect them away from public-only pages
  // to their private home page.
  if (token && (pathname === '/' || pathname === '/home')) {
    return NextResponse.redirect(new URL('/privatehome', req.url))
  }

  // If the user is not logged in and trying to access a protected route,
  // redirect them to the signIn page.
  if (!token && pathname !== '/' && pathname !== '/home') {
    return NextResponse.redirect(new URL('/privatehome', req.url))
  }

  return NextResponse.next()
}

// This config specifies which routes to protect.
export const config = {
  // Protect the Education routes, and also run on the home page for redirection.
  matcher: ['/', '/home', '/Education/:path*'],
}