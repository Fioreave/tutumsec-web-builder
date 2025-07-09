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
				}
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
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'blob': {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)'
					},
					'33%': {
						transform: 'translate(30px, -50px) scale(1.1)'
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.9)'
					},
					'100%': {
						transform: 'translate(0px, 0px) scale(1)'
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
				'bounce-subtle': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-5px)'
					}
				},
				'draw': {
					'0%': {
						strokeDashoffset: '300'
					},
					'100%': {
						strokeDashoffset: '0'
					}
				},
				'spin-slow': {
					from: {
						transform: 'rotate(0deg)'
					},
					to: {
						transform: 'rotate(360deg)'
					}
				},
				'shine': {
					'0%': {
						left: '-100%'
					},
					'100%': {
						left: '100%'
					}
				},
				'slide-right': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				'dash': {
					'0%': {
						strokeDashoffset: '20'
					},
					'100%': {
						strokeDashoffset: '0'
					}
				},
				'slow-zoom': {
					'0%, 100%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(1.05)'
					}
				},
				'slow-pan': {
					'0%': {
						transform: 'translateX(0) translateY(0)'
					},
					'25%': {
						transform: 'translateX(-10px) translateY(-5px)'
					},
					'50%': {
						transform: 'translateX(-5px) translateY(-10px)'
					},
					'75%': {
						transform: 'translateX(5px) translateY(-5px)'
					},
					'100%': {
						transform: 'translateX(0) translateY(0)'
					}
				},
				'grid-move': {
					'0%': {
						transform: 'translate(0, 0)'
					},
					'100%': {
						transform: 'translate(50px, 50px)'
					}
				},
				'pattern-move': {
					'0%': {
						backgroundPosition: '0 0'
					},
					'100%': {
						backgroundPosition: '40px 40px'
					}
				},
				'pattern-slide': {
					'0%': {
						backgroundPosition: '0 0'
					},
					'100%': {
						backgroundPosition: '80px 80px'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'blob': 'blob 7s infinite',
				'float': 'float 3s ease-in-out infinite',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'draw': 'draw 2s ease-out forwards',
				'spin-slow': 'spin-slow 8s linear infinite',
				'shine': 'shine 0.5s ease-out',
				'slide-right': 'slide-right 0.8s ease-out forwards',
				'dash': 'dash 2s linear infinite',
				'slow-zoom': 'slow-zoom 20s ease-in-out infinite',
				'slow-pan': 'slow-pan 30s ease-in-out infinite',
				'grid-move': 'grid-move 20s linear infinite',
				'pattern-move': 'pattern-move 10s linear infinite',
				'pattern-slide': 'pattern-slide 15s linear infinite'
			},
			scale: {
				'102': '1.02'
			},
			animationDelay: {
				'500': '0.5s',
				'1000': '1s',
				'1500': '1.5s',
				'2000': '2s',
				'4000': '4s'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }: any) {
			const newUtilities = {
				'.animation-delay-500': {
					'animation-delay': '0.5s'
				},
				'.animation-delay-1000': {
					'animation-delay': '1s'
				},
				'.animation-delay-1500': {
					'animation-delay': '1.5s'
				},
				'.animation-delay-2000': {
					'animation-delay': '2s'
				},
				'.animation-delay-4000': {
					'animation-delay': '4s'
				}
			}
			addUtilities(newUtilities)
		}
	],
} satisfies Config;
