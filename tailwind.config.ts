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
  			background: 'hsl(0, 0%, 100%)', // White
  			foreground: 'hsl(240, 10%, 3.9%)', // Dark gray, almost black
  			card: {
  				DEFAULT: 'hsl(0, 0%, 100%)', // White
  				foreground: 'hsl(240, 10%, 3.9%)' // Dark gray, almost black
  			},
  			popover: {
  				DEFAULT: 'hsl(0, 0%, 100%)', // White
  				foreground: 'hsl(240, 10%, 3.9%)' // Dark gray, almost black
  			},
  			primary: {
  				DEFAULT: 'hsl(124, 70%, 50%)', // A vibrant green
  				foreground: 'hsl(0, 0%, 100%)' // White
  			},
  			secondary: {
  				DEFAULT: 'hsl(51, 100%, 50%)', // A bright yellow
  				foreground: 'hsl(240, 10%, 3.9%)' // Dark gray, almost black
  			},
  			muted: {
  				DEFAULT: 'hsl(0, 0%, 95%)', // A very light gray
  				foreground: 'hsl(0, 0%, 45%)' // A medium gray
  			},
  			accent: {
  				DEFAULT: 'hsl(180, 100%, 35%)', // A teal
  				foreground: 'hsl(0, 0%, 100%)' // White
  			},
  			destructive: {
  				DEFAULT: 'hsl(0, 85%, 60%)', // A saturated red
  				foreground: 'hsl(0, 0%, 100%)' // White
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
