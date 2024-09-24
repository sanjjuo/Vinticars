/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#db2d2e",
        subMain: "#323232",
        thirdMain: "#15181f",
        customGray: "#999999"
      },
      container: {
        center: true, // This centers the container horizontally by default
        padding: {
          lg: "0",
          sm: "10rem",
          xs: "1rem",
          md: "1rem"
        }
      },
    },
  },
  plugins: [],
})