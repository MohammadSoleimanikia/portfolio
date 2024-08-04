/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#31333B",
        primaryLight: "#3D3E42",
        primaryLighter: "#636572",
      
        secondaryYellow: "#FFC86B",
        secondaryBlue: "#6BA2FF",
        
      },
      fontFamily:{
        body:['Poppins']
      }
    },
  },
  plugins: [],
};
