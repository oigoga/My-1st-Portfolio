/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1840px'
    },
    colors: {
      'navy': '#0f0e17',
      'pink': '#e53170',
      'orange': '#ff8906',
      'white': '#fffffe',
      'gray-dark': '#273444',
      'gray': '#a7a9be',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      Rubik_dirt: [ 'Rubik Dirt', 'cursive'],
      Lato: ['Lato', 'sans-serif']
    },
    extend: {

    },
  },
  plugins: [],
}
