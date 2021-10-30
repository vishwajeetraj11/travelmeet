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
    extend: {
      boxShadow: {
        modal: 'rgb(0 0 0 / 9%) 0px 3px 12px',
        small: 'rgb(0 0 0 / 7%) 0px 5px 10px',
        large: 'rgb(0 0 0 / 7%) 0px 5px 20px',
        'large-modal': 'rgb(0 0 0 / 50%) 0px 16px 70px'
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
