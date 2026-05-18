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
          primary:    '#00BFBF',   // Primary
          secondary:  '#F5C800',   // Secondary
          'dark-text': '#111111',  // Dark Text
          'light-bg':  '#F0F9FA',  // Light Background
          'dark-bg':   '#0C1C2C',  // Dark Background
          'dark-card': '#0F2030',  // Dark Card
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
          '0%,100%': { boxShadow: '0 0 0 0 rgba(0,191,191,0.45)' },
          '50%': { boxShadow: '0 0 0 14px rgba(0,191,191,0)' },
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
