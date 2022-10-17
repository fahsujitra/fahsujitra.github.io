/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xss': '1px',
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['Barlow Condensed', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      },
      colors: {
        'custom-green': '#9bc53d',
        'custom-red': '#d62839',
      }
    }
  },
  plugins: [],
}
