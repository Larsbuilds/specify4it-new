import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: "'Space Mono', monospace",
        display: "'Zen Dots', cursive",
      },
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        text: 'rgb(var(--text) / <alpha-value>)',
        'background-darker': 'rgb(var(--background-darker) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)',
      },
      spacing: {
        18: '4.5rem',
      },
      maxWidth: {
        '8xl': '1166px',
      },
      boxShadow: {
        'glow': '0 0 50px rgba(0, 163, 217, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
