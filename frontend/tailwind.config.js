/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        stylish:["Poppins","sans-serif"],
        robo:["Roboto","serif"]
      },
      colors:{
        blue:"#27508C",
        ash:"#63636499"
      },
    },
  },
  plugins: [],
}