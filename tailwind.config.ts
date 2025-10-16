import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
      colors: {
        'primary': {
          DEFAULT: '#0D63F3', // A strong, professional blue
          'dark': '#0A4DBA',
          'light': '#E7F0FF',
        },
        'neutral': {
          900: '#111827', // Near-black for headings
          800: '#1F2937',
          600: '#4B5563', // Body text
          300: '#D1D5DB', // Borders
          200: '#E5E7EB',
          100: '#F3F4F6', // Section backgrounds
          50: '#F9FAFB',   // Lighter backgrounds
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/hero-bg-pattern.svg')",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config