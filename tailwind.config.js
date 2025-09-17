/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{html,js}'],
  theme: {
     fontFamily: {
        optima: ['Optima', 'sans-serif'],
        arsenal: ['Arsenal', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slideInUp': 'slideInUp 0.8s ease-out',
        'slideInLeft': 'slideInLeft 0.8s ease-out',
        'slideInRight': 'slideInRight 0.8s ease-out',
        'fadeIn': 'fadeIn 1s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
      extend: {
        colors: {
          'soft-jet' : '#1C1C1B'
        },
        screens: {
          'xs': '360px'
        }
      }      
  },
  plugins: [],
}