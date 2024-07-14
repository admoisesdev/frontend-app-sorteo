const { fontFamily } = require("tailwindcss/defaultTheme")
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'blue-dark-app-900': '#131E3A',
				'blue-dark-app-800': '#2E3038',
				'blue-dark-app-700': '#20315C',
				'blue-dark-app-500': '#28335E',
				'blue-dark-app-400': '#264085',
				'blue-dark-app-300': '#353960',
				'blue-app-light-800': '#3565E1',
        'blue-app-light-500': '#356EFF',
				'purple-app-400': '#6A1ECD',
				'purple-app-600': '#9747FF',
        'purple-app-300': '#7827B8',
        'purple-app-200': '#CC5FFF',
        'yellow-app-800': '#FFF500',
        'yellow-app-500': '#FFC327',
				'yellow-app-200': '#FFCC69',

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
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
      fontFamily: {
        'kelly': ["var(--font-kelly)"],
      },
      backgroundImage: {
        'hero-img': "url('/hero-image.png')",
        "hero-home": "url('/hero-home.png')",
        'hero-card': "url('/hero-card.png')",
        'hero-admin': "url('/hero-admin.png')"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config