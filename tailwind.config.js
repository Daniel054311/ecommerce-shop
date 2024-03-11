/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    colors: {
        voilentColor: ' rgba(132, 52, 225, 1)',
        blackColor: 'rgba(60, 66, 66, 1)',
        lightBlueColor:'rgba(71, 172, 223, 1)'
      },
      backgroundColor:{
        blackBg: 'rgba(60, 66, 66, 1)',
        grayBg:'rgba(190, 188, 189, 1)'
      },
      borderColor: {
        blackBorder: 'rgba(60, 66, 66, 1)',
        grayColor:'rgba(190, 188, 189, 1)'
      },
    },

  },
  plugins: [],
}
