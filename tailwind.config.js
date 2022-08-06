/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#21a8c7',
        disable:'#F2F2F2',
        disableText: '#ADB7B8',
        secondaryText:'#768789'
      },
      keyframes: {
        curveMove1: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        curveMove2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(50%)' },
        },
      },
      animation: {
        curveMove1: 'curveMove1 50s linear infinite',
        curveMove2: 'curveMove2 50s linear infinite',
      },
    },
  },
  plugins: [],
}
