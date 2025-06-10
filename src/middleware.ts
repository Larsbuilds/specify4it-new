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

  // Set appropriate cache headers based on content type
  const pathname = request.nextUrl.pathname;
  
  if (pathname.match(/\.(jpg|jpeg|png|webp|avif|gif|ico)$/)) {
    // Static assets - long term caching
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (pathname.match(/\.(js|css)$/)) {
    // JavaScript and CSS files
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (pathname.startsWith('/_next/data/')) {
    // Next.js data files
    response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
    response.headers.delete('Cache-Control');
  } else if (!pathname.includes('api')) {
    // HTML pages - enable bfcache
    response.headers.set('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');
  }

  // Ensure no-store is not set for static assets
  if (response.headers.get('Cache-Control')?.includes('no-store')) {
    const isStatic = pathname.match(/\.(jpg|jpeg|png|webp|avif|gif|ico|js|css)$/);
    if (isStatic) {
      response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }

  return response;
}

export const config = {
  matcher: [
    '/en/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
