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
}
 
export const config = {
  matcher: ['/en/:path*'],
}
