/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      gridRow: {
        'span-16': 'span 16 / span 16',
        'span-10': 'span 10 / span 10'
      },
      fontFamily: {
        figtree: "'Figtree', sans-serif",
        lato: "'Lato', sans-serif",
        montserrat: "'Montserrat', sans-serif",
        poppins: "'Poppins', sans-serif",
      }
    },
  },
  plugins: [],
}