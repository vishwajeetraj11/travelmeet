const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      primary: '#8627E0',
      secondary: '#4834d4'
  },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
