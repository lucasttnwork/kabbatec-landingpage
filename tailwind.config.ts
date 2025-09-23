import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"

const config = {
  darkMode: ["class", "class"],
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./pages/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./src/**/*.{ts,tsx,mdx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		fontFamily: {
				sans: [
					'var(--font-sans)'
				],
				serif: [
					'var(--font-serif)'
				]
  		},
  		fontSize: {
  			h1: [
  				'56px',
  				{
  					lineHeight: '1.1',
  					letterSpacing: '-0.01em'
  				}
  			],
  			h2: [
  				'36px',
  				{
  					lineHeight: '1.2',
  					letterSpacing: '-0.005em'
  				}
  			],
  			h3: [
  				'30px',
  				{
  					lineHeight: '1.25'
  				}
  			],
  			'body-lg': [
  				'18px',
  				{
  					lineHeight: '1.7'
  				}
  			],
  			body: [
  				'16px',
  				{
  					lineHeight: '1.7'
  				}
  			],
  			caption: [
  				'14px',
  				{
  					lineHeight: '1.5'
  				}
  			]
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
			brand: {
          base: 'hsl(var(--background))', // #000000
          'on-base': 'hsl(var(--foreground))', // #FFFFFF
        },
			accentAlt: {
          primary: 'hsl(46 38% 54%)', // Gold
          'on-primary': 'hsl(var(--background))', // Dark on gold for contrast
        },
  		},
  		spacing: {
  			xs: '0.75rem',   // 12px
  			sm: '1rem',      // 16px
  			md: '1.5rem',    // 24px
  			lg: '2.5rem',    // 40px
  			xl: '3.5rem',    // 56px
  			'2xl': '5rem',   // 80px
  			'3xl': '6rem',   // 96px
  		},
  		transitionDuration: {
  			'150': '150ms',
  			'200': '200ms',
  			'400': '400ms',
  			'600': '600ms',
  		},
  		transitionTimingFunction: {
  			'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  			'premium': 'cubic-bezier(0.2, 0.8, 0.2, 1)', // Suggested ease
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'float': {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-20px)'
  				}
  			},
  			'glow-pulse': {
  				'0%, 100%': {
  					opacity: '0.5',
  					transform: 'scale(1)'
  				},
  				'50%': {
  					opacity: '1',
  					transform: 'scale(1.05)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'float': 'float 6s ease-in-out infinite',
  			'glow-pulse': 'glow-pulse 4s ease-in-out infinite'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
} satisfies Config

export default config
