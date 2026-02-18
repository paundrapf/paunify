/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        harvest: {
          gold: '#D4A017',
          light: '#E5B12A',
          dark: '#B88A0D'
        },
        avocado: '#568203',
        burnt: {
          orange: '#CC5500',
          light: '#E56A14'
        },
        mustard: '#FFDB58',
        teal: '#008080',
        rust: '#B7410E',
        neon: {
          pink: '#FF10F0',
          blue: '#00FFFF',
          lime: '#CCFF00'
        },
        cream: '#FFF8E7',
        walnut: '#5D4E37',
        teak: '#8B5A2B',
        oak: '#C4A77D'
      },
      fontFamily: {
        display: ['Cooper Black', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Pacifico', 'cursive']
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.1)' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 16, 240, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 16, 240, 0.6)' }
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        }
      }
    },
  },
  plugins: [],
}
