import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				organic: {
					green: 'hsl(var(--organic-green))',
					'green-light': 'hsl(var(--organic-green-light))',
					orange: 'hsl(var(--organic-orange))',
					cream: 'hsl(var(--organic-cream))',
					sage: 'hsl(var(--organic-sage))',
					terra: 'hsl(var(--organic-terra))',
					earth: 'hsl(var(--organic-earth))'
				}
			},
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'serif': ['Playfair Display', 'serif'],
				'display': ['Playfair Display', 'serif'],
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
				'sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.025em' }],
				'base': ['1rem', { lineHeight: '1.7', letterSpacing: '0.01em' }],
				'lg': ['1.125rem', { lineHeight: '1.7', letterSpacing: '0.01em' }],
				'xl': ['1.25rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
				'2xl': ['1.5rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
				'3xl': ['1.875rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
				'4xl': ['2.25rem', { lineHeight: '1.3', letterSpacing: '0.01em' }],
				'5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '0.01em' }],
				'6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '0.01em' }],
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
				'144': '36rem',
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
				'organic-bounce': {
					'0%, 100%': {
						transform: 'translateY(0)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'translateY(-10px)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
					}
				},
				'gentle-fade': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'organic-bounce': 'organic-bounce 2s infinite',
				'gentle-fade': 'gentle-fade 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
