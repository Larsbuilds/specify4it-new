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
        'zen-dots': ['var(--font-zen-dots)', 'cursive'],
        'space-mono': ['var(--font-space-mono)', 'monospace'],
      },
      colors: {
        primary: '#00A3D9',
        background: '#040414',
      },
      fontSize: {
        'h1': '62px',
        'h2': '50px',
        'h4': '28px',
        'h5': '24px',
        'body': '20px',
      },
    },
  },
  plugins: [],
};

export default config;
