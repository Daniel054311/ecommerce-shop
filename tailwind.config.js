/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    colors: {
        voilentColor: ' rgba(132, 52, 225, 1)',
        blackColor:'rgba(60, 66, 66, 1)'
      },
      backgroundColor:{
      blackBg:'rgba(60, 66, 66, 1)'
      },
      borderColor: {
        blackBorder:'rgba(60, 66, 66, 1)'
      },
    },

  },
  plugins: [],
}
