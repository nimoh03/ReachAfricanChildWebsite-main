/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          50: '#302C51',
          100: '#8D181B',
          200 : '#302C51',
          300 :'#FFAE88',
          
          900: '#7A7E9A',
        },
      },

    },
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
          anime: {
              words: ['We Create Awareness On The Benefits Of Education',' We Sustain Good Practices Towards Self And The Environment'],
              delay: 1,
              writeSpeed : 0.1
          }
      }
  })
  ],
}