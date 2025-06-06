import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Consolidated security headers
const securityHeaders = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(),microphone=(),geolocation=(),interest-cohort=()',
};

export function middleware(request: NextRequest) {
  // Handle /en/ redirects
  if (request.nextUrl.pathname.startsWith('/en/')) {
    return NextResponse.redirect(
      new URL(request.nextUrl.pathname.replace('/en/', '/'), request.url)
    );
  }

  const response = NextResponse.next();

  // Apply security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  // Cache static assets
  if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|webp|avif|gif|ico)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  return response;
}

export const config = {
  matcher: [
    '/en/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
