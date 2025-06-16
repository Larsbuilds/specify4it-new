import { headers } from "next/headers";
import { Space_Mono, Inter } from "next/font/google";
import { Zen_Dots } from 'next/font/google'
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from 'next/script';
import { ErrorBoundary } from '@/components/ErrorBoundary';

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
  fallback: ["Courier New", "monospace"],
  variable: "--font-space-mono",
  adjustFontFallback: true
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
  variable: "--font-inter",
  adjustFontFallback: true
});

const zenDots = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: true,
  variable: "--font-zen-dots"
});

export async function generateMetadata() {
  const nonce = headers().get('x-nonce');
  return {
    title: "Specify4it - Next Generation API Documentation",
    description:
      "Specify4it is a next-generation API documentation tool that helps you create beautiful, interactive API documentation.",
    metadataBase: new URL(
      process.env.NODE_ENV === "production"
        ? "https://specify4it.com"
        : "http://localhost:3000"
    ),
    openGraph: {
      title: "Specify4it - Next Generation API Documentation",
      description:
        "Specify4it is a next-generation API documentation tool that helps you create beautiful, interactive API documentation.",
      url: "https://specify4it.com",
      siteName: "Specify4it",
      images: [
        {
          url: "https://specify4it.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "Specify4it - Next Generation API Documentation",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Specify4it - Next Generation API Documentation",
      description:
        "Specify4it is a next-generation API documentation tool that helps you create beautiful, interactive API documentation.",
      creator: "@specify4it",
      images: ["https://specify4it.com/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    other: {
      'csp-nonce': nonce,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${inter.variable} ${zenDots.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#040414" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @font-face {
                font-family: 'Space Mono';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url('/_next/static/media/space-mono-latin-400-normal.woff2') format('woff2');
              }
              @font-face {
                font-family: 'Space Mono';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url('/_next/static/media/space-mono-latin-700-normal.woff2') format('woff2');
              }
              .font-optimization {
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-darkBlue text-white antialiased font-optimization-critical">
        <ErrorBoundary>
          <Header />
          <main className="flex-grow pt-[64px] md:pt-[80px]">{children}</main>
          <Footer />
        </ErrorBoundary>
        <Script
          id="gtm-base"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          nonce={headers().get('x-nonce') || undefined}
        />
        <Script
          id="gtm-config"
          strategy="afterInteractive"
          nonce={headers().get('x-nonce') || undefined}
        >
          {`
            if (!window.dataLayer) window.dataLayer = [];
            window.gtag = function() { window.dataLayer.push(arguments); };
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              send_page_view: true,
              transport_type: 'beacon',
              anonymize_ip: true,
              cookie_flags: 'SameSite=Lax;Secure',
              client_storage: 'none'
            });
          `}
        </Script>
      </body>
    </html>
  );
}
