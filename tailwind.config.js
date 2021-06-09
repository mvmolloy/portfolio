const colors = require('tailwindcss/colors')
module.exports = {
  purge: 
    [
        './src/**/*.html',
        './src/**/*.vue',
    ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        height: {
            'vh80': '80vh',
        },
        screens: {
            'xs': '400px',
            '3xl': '1600px',
        },
        colors: {
            emerald: colors.emerald,
            seafoam: {
                50: '#f4f8f6',
                100: '#d0e2d8',
                300: '#6FA687',
                400: '#639f7d',
                500: '#5b9373'
            },
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
