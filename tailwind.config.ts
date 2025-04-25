import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			base: {
  				background: 'hsl(0, 0%, 100%)', // White
  				foreground: 'hsl(240, 10%, 3.9%)' // Dark gray, almost black
  			},
  			card: {
  				DEFAULT: 'hsl(0, 0%, 100%)', // White
  				foreground: 'hsl(240, 10%, 3.9%)' // Dark gray, almost black
  			},
  			popover: {
  				DEFAULT: 'hsl(0, 0%, 100%)', // White
  				foreground: 'hsl(240, 10%, 3.9%)' // Dark gray, almost black
  			},
  			primary: {
  				DEFAULT: 'hsl(210, 60%, 60%)', // Un azul suave
  				foreground: 'hsl(0, 0%, 100%)' // Blanco
  			},
  			secondary: {
  				DEFAULT: 'hsl(16, 100%, 66%)', // Un coral
  				foreground: 'hsl(240, 10%, 3.9%)' // Gris oscuro, casi negro
  			},
  			background: 'hsl(0, 0%, 95%)', // Gris claro
  			foreground: 'hsl(210, 30%, 20%)', // Azul oscuro
  			muted: {
  				DEFAULT: 'hsl(0, 0%, 95%)', // A very light gray
  				foreground: 'hsl(0, 0%, 45%)' // A medium gray
  			},
  			accent: {
  				DEFAULT: 'hsl(340, 80%, 60%)', // Un rosa coral
  				foreground: 'hsl(0, 0%, 100%)' // Blanco
  			},
  			destructive: {
  				DEFAULT: 'hsl(0, 85%, 60%)', // Un rojo saturado
  				foreground: 'hsl(0, 0%, 100%)' // Blanco
  			},
  			border: 'hsl(0, 0%, 88%)', // Light gray
  			input: 'hsl(0, 0%, 88%)', // Light gray
  			ring: 'hsl(240, 10%, 3.9%)', // Dark gray, almost black
  			chart: {
  				'1': 'hsl(12, 76%, 61%)',
  				'2': 'hsl(173, 58%, 39%)',
  				'3': 'hsl(197, 37%, 24%)',
  				'4': 'hsl(43, 74%, 66%)',
  				'5': 'hsl(27, 87%, 67%)'
  			},
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
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
