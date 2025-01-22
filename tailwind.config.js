/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryDark: '#482A63',
        secondaryDark: '#281D3E',
        tertiaryDark: '#3E2E4D',
      },
      boxShadow: {
        'interactive': "0 20px 10px rgba(72,42,99,0.08), 0 20px 15px rgba(67,56,255,0.1), 0 20px 20px rgba(234,10,238,0.2)",
        'component': "0 4px 10px rgba(72,42,99,0.08), 0 10px 15px rgba(67,56,255,0.1), 0 15px 20px rgba(0,10,0,0.2)"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(1rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)'}
        },
        moveBackground: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out', 
        'moveBackground': 'moveBackground 10s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out'
      },
    },
  },
  plugins: [],
};
