/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeBlue: '#DDEFFD'
      },
      fontFamily: {
        'juaRegular': ['Jua Regular'],
        'outfitRegular': ['Outfit Regular'],
        'outfitMedium': ['Outfit Medium'],
        'outfitBold': ['Outfit Bold'],
      }
    },
  },
  plugins: [],
}