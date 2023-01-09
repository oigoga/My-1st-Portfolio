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
      'navyy': '#243763',
      'navyyy': '#251749',
      'navyyyy': '#495579',
      'off-white': '#FFFBEB'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      Rubik_dirt: [ 'Rubik Dirt', 'cursive'],
      Lato: ['Lato', 'sans-serif'],
      Ubuntu: ['Ubuntu', 'sans-serif']
    },
    extend: {
      height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen/6": "calc(100vh * 0.8)",
      }),
    },
  },
  plugins: [],
}
