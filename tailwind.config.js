/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F7F7F7",
        "secondary": "#0147FF"
      },
      width: {
        "container-width": "83.3%"
      }
    },
  },
  plugins: [],
}