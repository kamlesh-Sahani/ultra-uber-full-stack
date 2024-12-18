/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secondaryColor:"#8B949E",
        thirdColor:"#58A6FF",
        lightColor:"#1F6FEB"

      }
    },
  },
  plugins: [],
}