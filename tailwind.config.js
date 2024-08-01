/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#34353A",
        secondary: "#FFC86B",
      },
      fontFamily:{
        body:['Poppins']
      }
    },
  },
  plugins: [],
};
