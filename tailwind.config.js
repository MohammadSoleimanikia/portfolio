/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // adding our own colors
        primary: "#34353A3",
        secondary: "#e2e2d5",
      },
    },
  },
  plugins: [],
};
