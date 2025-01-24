import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
  			primary: {
  				light: {
  					DEFAULT: '#00A896',
  					foreground: '#FFFFFF',
  					navy: '#2C3E50',
  					teal: '#00A896',
  					gray: '#6B7280'
  				},
  				dark: {
  					DEFAULT: '#00E5FF',
  					foreground: '#121212',
  					navy: '#1A2B3C',
  					teal: '#00E5FF',
  					gray: '#9CA3AF'
  				}
  			},
  			accent: {
  				light: {
  					red: '#E63946',
  					green: '#2A9D8F',
  					blue: '#457B9D'
  				},
  				dark: {
  					red: '#FF4D4D',
  					green: '#00FFB3',
  					blue: '#4DFFFF'
  				}
  			},
  			background: {
  				light: {
  					DEFAULT: '#FFFFFF',
  					secondary: '#F3F4F6'
  				},
  				dark: {
  					DEFAULT: '#121212',
  					secondary: '#1E1E1E'
  				}
  			},
  			text: {
  				light: {
  					primary: '#111827',
  					secondary: '#4B5563'
  				},
  				dark: {
  					primary: '#F9FAFB',
  					secondary: '#D1D5DB'
  				}
  			},
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
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
  		backgroundImage: {
  			'cyber-gradient-light': 'linear-gradient(45deg, #00A896, #457B9D)',
  			'cyber-gradient-dark': 'linear-gradient(45deg, #1A2B3C, #00A896)',
  			'neon-gradient-light': 'linear-gradient(135deg, #00A896, #E63946)',
  			'neon-gradient-dark': 'linear-gradient(135deg, #00E5FF, #FF4D4D)',
  			'cyber-gradient': 'linear-gradient(45deg, #00A896, #457B9D)',
  			'neon-gradient': 'linear-gradient(135deg, #00A896, #E63946)'
  		},
  		textGradient: {
  			'cyber-light': 'linear-gradient(45deg, #00A896, #457B9D)',
  			'cyber-dark': 'linear-gradient(45deg, #00E5FF, #4DFFFF)',
  			'neon-light': 'linear-gradient(135deg, #00A896, #E63946)',
  			'neon-dark': 'linear-gradient(135deg, #00E5FF, #FF4D4D)',
  			cyber: 'linear-gradient(45deg, #00A896, #457B9D)',
  			neon: 'linear-gradient(135deg, #00A896, #E63946)'
  		},
  		boxShadow: {
  			'light-header': '0 4px 6px -1px rgba(0, 168, 150, 0.1), 0 2px 4px -1px rgba(0, 168, 150, 0.06)',
  			'dark-header': '0 4px 6px -1px rgba(0, 229, 255, 0.2), 0 2px 4px -1px rgba(0, 229, 255, 0.1)'
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
  			'cyber-pulse-light': {
  				'0%, 100%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				},
  				'50%': {
  					transform: 'scale(1.02)',
  					opacity: '0.9'
  				}
  			},
  			'cyber-pulse-dark': {
  				'0%, 100%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				},
  				'50%': {
  					transform: 'scale(1.03)',
  					opacity: '0.8'
  				}
  			},
  			'cyber-flicker': {
  				'0%, 100%': {
  					opacity: '1'
  				},
  				'50%': {
  					opacity: '0.7'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'cyber-pulse-light': 'cyber-pulse-light 2s ease-in-out infinite',
  			'cyber-pulse-dark': 'cyber-pulse-dark 2s ease-in-out infinite',
  			'cyber-flicker': 'cyber-flicker 1.5s infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			cyber: [
  				'Space Grotesk"',
  				'sans-serif'
  			],
  			'mono-cyber': [
  				'Roboto Mono"',
  				'monospace'
  			]
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient-light': {
          'background-image': 'linear-gradient(45deg, #00A896, #457B9D)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-dark': {
          'background-image': 'linear-gradient(45deg, #00E5FF, #4DFFFF)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient': {
          'background-image': 'linear-gradient(45deg, #00A896, #457B9D)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-neon-gradient': {
          'background-image': 'linear-gradient(135deg, #00A896, #E63946)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        }
      }
      addUtilities(newUtilities)
    }
  ],
};

export default config;
