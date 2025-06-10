import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        darkBlue: '#040414',
        brandBlue: '#3B82F6',
        grayBlue: '#1E293B',
      },
      fontFamily: {
        mono: ['var(--font-space-mono)', 'monospace'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-zen-dots)', 'Arial Black', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3.5rem', { lineHeight: '1.2', letterSpacing: '0.1em' }],
        'h2': ['2.5rem', { lineHeight: '1.3' }],
        'h3': ['2rem', { lineHeight: '1.4' }],
        'h4': ['1.5rem', { lineHeight: '1.5' }],
        'h5': ['1.25rem', { lineHeight: '1.5' }],
        'body': ['1.125rem', { lineHeight: '1.7' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      boxShadow: {
        'glow': '0 0 50px rgba(59, 130, 246, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
