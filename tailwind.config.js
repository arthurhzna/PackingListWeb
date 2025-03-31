/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monoton: ['Monoton', 'cursive'],
        quicksand: ['Quicksand', 'sans-serif']
      },
      colors: {
        brown: '#5a3e2b'
      }
    },
  },
  plugins: [],
}