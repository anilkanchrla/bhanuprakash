/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        temple: {
          maroon: '#680b1e',
          red: '#881329',
          deep: '#470511',
          gold: '#d4af37',
          goldlight: '#f9e79f',
          golddark: '#996515',
          cream: '#fffdf7',
          sandal: '#fbf7ee',
          border: '#e8d5b5',
          emerald: '#0b3d2e',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel Decorative"', 'Cinzel', 'serif'],
        greatvibes: ['"Great Vibes"', 'cursive'],
        body: ['"Poppins"', 'sans-serif'],
        telugu: ['"Noto Serif Telugu"', 'serif'],
      },
      boxShadow: {
        'divine': '0 10px 35px -5px rgba(212, 175, 55, 0.3), 0 8px 16px -6px rgba(104, 11, 30, 0.25)',
        'goldglow': '0 0 25px rgba(212, 175, 55, 0.45)',
        'lampglow': '0 0 35px rgba(245, 158, 11, 0.6)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}

