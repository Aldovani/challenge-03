/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#B88E2F',
          400: '#FFF3E3',
          200: '#FAF3EA',
          100: '#F9F1E7',
          50: '#FCF8F3',
        },
        action: {
          success: '#2EC1AC',
          error: '#E97171',
        },
        gray: {
          600: '#242424',
          500: '#3A3A3A',
          400: '#616161',
          300: '#898989',
          200: '#9F9F9F',
          100: '#B0B0B0',
          50: '#F4F5F7',
        },
      },
      boxShadow: {
        'social-link': '0px 4px 14px 0px rgba(0, 0, 0, 0.15)',
      },
      keyframes: {
        'open-cart': {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'close-cart': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(100%)', opacity: 0 },
        },
      },

      animation: {
        'open-cart': 'open-cart 0.2s ease forwards',
        'close-cart': 'close-cart 0.2s ease forwards',
      },
    },
  },
  plugins: [],
}
