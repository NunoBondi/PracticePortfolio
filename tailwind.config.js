/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",],
  theme: {
    extend: {
      fontFamily:{
        'ptSans':['PT Sans', 'sans-serif'],
        'sora':['Sora','sans-serif'],
        'workSans':['Work Sans','sans-serif'],
      }
    },
 
  },
  plugins: [],
}
