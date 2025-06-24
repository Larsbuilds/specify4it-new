import { Zen_Dots, Space_Mono, Inter } from 'next/font/google';

export const zenDots = Zen_Dots({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['Arial', 'sans-serif'],
  adjustFontFallback: true,
  variable: '--font-zen-dots',
});

export const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  preload: true,
  fallback: ['Courier New', 'monospace'],
  variable: '--font-space-mono',
  adjustFontFallback: true,
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
  variable: '--font-inter',
  adjustFontFallback: true,
});
