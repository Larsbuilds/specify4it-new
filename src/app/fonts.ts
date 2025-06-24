import { Zen_Dots } from 'next/font/google';

export const zenDots = Zen_Dots({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['Arial', 'sans-serif'],
  adjustFontFallback: true,
  variable: '--font-zen-dots',
});
