/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#22C55E',
        'paragraph-one': '#556987',
      },
      fontFamily:{
        body:["Poppins", "sans-serif"]
      },
      content: {
        'checkIcon': 'url("/src/Checkbox.svg")',
      },
    },
  },
  plugins: [],
}