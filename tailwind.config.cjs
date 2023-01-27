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
      'black': '#000000',
      'teal': '#008080',
      'bg-colour': '#f7f7f8'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      Rubik_dirt: [ 'Rubik Dirt', 'cursive'],
      Lato: ['Lato', 'sans-serif'],
      Ubuntu: ['Ubuntu', 'sans-serif'],
      Pacifico: ['Pacifico', 'cursive']
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
