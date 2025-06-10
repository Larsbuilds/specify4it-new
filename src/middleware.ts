import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function generateNonce() {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return btoa(Array.from(array).map(byte => String.fromCharCode(byte)).join(''));
}

// Consolidated security headers
const securityHeaders = {
  'X-DNS-Prefetch-Control': 'on',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(),microphone=(),geolocation=(),interest-cohort=()',
};

export function middleware(request: NextRequest) {
  // Handle /en/ redirects
  if (request.nextUrl.pathname.startsWith('/_next/static/')) {
    return NextResponse.next(
      new Response(null, {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      })
    );
  }

  if (request.nextUrl.pathname.startsWith('/en/')) {
    return NextResponse.redirect(
      new URL(request.nextUrl.pathname.replace('/en/', '/'), request.url)
    );
  }

  const nonce = generateNonce();
  const cspHeader = {
    'Content-Security-Policy': [
      "default-src 'self'",
      // Required for Next.js production build
      `script-src 'self' 'unsafe-eval' 'nonce-${nonce}' https://*.googletagmanager.com https://*.google-analytics.com`,
      // Restrict script elements
      "script-src-elem 'self' 'nonce-${nonce}' https://*.googletagmanager.com https://*.google-analytics.com",
      // Block inline event handlers
      "script-src-attr 'none'",
      // Report CSP violations
      "report-uri /api/csp-report",
      // Allow inline styles and Google Fonts
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      // Allow images from our domain and data URIs
      "img-src 'self' data: https: blob:",
      "media-src 'self' https: blob:",
      // Allow connections to our domain and Google Analytics
      "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
      // Security headers
      "frame-ancestors 'none'",
      "form-action 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "worker-src 'self' blob:",
      "manifest-src 'self'",
      "upgrade-insecure-requests"
    ].join('; '),
  };

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
  } else if (!pathname.includes('api') && !pathname.includes('_next/data')) {
    // HTML pages - enable bfcache
    response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
    response.headers.set('Cache-Control-Allow-Private', 'true');
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
    '/((?!api|_next/static|_next/image|_next/data|favicon.ico).*)',
  ],
}
