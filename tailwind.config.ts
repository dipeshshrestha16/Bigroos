import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary:    '#19C2E3',   // Primary
          secondary:  '#F4C542',   // Secondary
          'dark-text': '#111111',  // Dark Text
          'light-bg':  '#F8FAFC',  // Light Background
          'dark-bg':   '#0F172A',  // Dark Background
          'gray-text': '#64748B',  // Gray Text
          border:      '#E2E8F0',  // Border
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2.5s cubic-bezier(0.4,0,0.6,1) infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(25,194,227,0.45)' },
          '50%': { boxShadow: '0 0 0 14px rgba(25,194,227,0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
