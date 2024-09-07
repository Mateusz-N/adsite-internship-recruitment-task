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
      },
      spacing: {
        "buttons-padding-tb": "12px",
        "buttons-padding-lr": "24px"
      },
      borderRadius: {
        "buttons-radius": "8px"
      }
    },
  },
  plugins: [],
}