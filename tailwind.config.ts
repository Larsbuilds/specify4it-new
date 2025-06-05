import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        mono: 'var(--font-space-mono)',
        display: 'var(--font-zen-dots)',
      },
      colors: {
        white: 'rgb(255, 255, 255)',
        black: 'rgb(0, 0, 0)',
        darkBlue: 'rgb(4, 4, 20)',
        linkBlue: 'rgb(0, 0, 238)',
        brandBlue: 'rgb(0, 163, 217)',
      },
      fontSize: {
        'h1': ['3.875rem', { lineHeight: '1.2', fontWeight: '400', letterSpacing: '0.2em' }],
        'h2': ['3.125rem', { lineHeight: '1.2', fontWeight: '400' }],
        'h4': ['1.75rem', { lineHeight: '1.3', fontWeight: '400' }],
        'h5': ['1.5rem', { lineHeight: '1.3', fontWeight: '400' }],
        'body': ['1.25rem', { lineHeight: '1.5', fontWeight: '400' }],
        'sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        'section': '3rem',      // 48px
        'section-lg': '6rem',   // 96px
        'section-xl': '7rem',   // 112px
      },
      maxWidth: {
        'content': '75%',
        'section': '1166px',
        'container': '1440px',
      },
      boxShadow: {
        'glow': '0 0 50px rgba(0, 163, 217, 0.3)',
        'glow-sm': '0 0 30px rgba(0, 163, 217, 0.2)',
      },
      height: {
        'header': '80px',
        'header-mobile': '64px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};

export default config;
