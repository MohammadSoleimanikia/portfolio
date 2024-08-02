/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#31333B",
        primaryLight: "#3D3E42",
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
