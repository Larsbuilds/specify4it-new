/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
    screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1280px',
  		'2xl': '1536px'
  	},
  	extend: {
  		fontFamily: {
  			mono: 'var(--font-space-mono)',
  			display: 'var(--font-zen-dots)'
  		},
  		colors: {
  			white: 'rgb(255, 255, 255)',
  			black: 'rgb(0, 0, 0)',
  			darkBlue: 'rgb(4, 4, 20)',
  			linkBlue: 'rgb(0, 0, 238)',
  			brandBlue: 'rgb(0, 163, 217)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {
  			h1: [
  				'3.875rem',
  				{
  					lineHeight: '1.2',
  					fontWeight: '400',
  					letterSpacing: '0.2em'
  				}
  			],
  			h2: [
  				'3.125rem',
  				{
  					lineHeight: '1.2',
  					fontWeight: '400'
  				}
  			],
  			h4: [
  				'1.75rem',
  				{
  					lineHeight: '1.3',
  					fontWeight: '400'
  				}
  			],
  			h5: [
  				'1.5rem',
  				{
  					lineHeight: '1.3',
  					fontWeight: '400'
  				}
  			],
  			body: [
  				'1.25rem',
  				{
  					lineHeight: '1.5',
  					fontWeight: '400'
  				}
  			],
  			sm: [
  				'0.875rem',
  				{
  					lineHeight: '1.5',
  					fontWeight: '400'
  				}
  			]
  		},
  		spacing: {
  			'18': '4.5rem',
  			section: '3rem',
  			'section-lg': '6rem',
  			'section-xl': '7rem'
  		},
  		maxWidth: {
  			content: '75%',
  			section: '1166px',
  			container: '1440px'
  		},
  		boxShadow: {
  			glow: '0 0 50px rgba(0, 163, 217, 0.3)',
  			'glow-sm': '0 0 30px rgba(0, 163, 217, 0.2)'
  		},
  		height: {
  			header: '80px',
  			'header-mobile': '64px'
  		},
  		container: {
  			center: true,
  			padding: {
  				DEFAULT: '1rem',
  				sm: '2rem',
  				lg: '4rem',
  				xl: '5rem',
  				'2xl': '6rem'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
