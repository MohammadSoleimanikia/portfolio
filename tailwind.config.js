/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#34353A",
        secondaryYellow: "#FFC86B",
        secondaryBlue: "#6BA2FF",
        secondaryBlueLight: "#daf0ff",
        
      },
      fontFamily:{
        body:['Poppins']
      }
    },
  },
  plugins: [],
};
