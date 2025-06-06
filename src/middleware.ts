import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // Remove /en/* from URLs
  if (request.nextUrl.pathname.startsWith('/en/')) {
    return NextResponse.redirect(new URL(request.nextUrl.pathname.replace('/en/', '/'), request.url))
  }
  
  if (request.nextUrl.pathname === '/en') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Clone the response
  const response = NextResponse.next()

  // Add security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')

  // Add caching headers for static assets
  if (request.nextUrl.pathname.match(/\.(jpg|jpeg|gif|png|ico|svg|css|js)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }

  return response
}
 
export const config = {
  matcher: [
    '/en/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
