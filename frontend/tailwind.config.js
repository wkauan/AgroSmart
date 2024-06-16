/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'verde': '#3CB371',
        'branco': '#EBEBEB',
        'cinza': '#222222',
      },
    },
  },
  plugins: [],
}