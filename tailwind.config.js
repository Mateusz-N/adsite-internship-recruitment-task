/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": "#F7F7F7",
        "primary-dark": "#282828",
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
      },
      fontFamily: {
        "primary": "Roboto Condensed",
        "buttons": "Roboto Flex",
        "headers": "Bebas Neue"
      },
      letterSpacing: {
        "buttons": "-0.02em"
      }
    },
  },
  plugins: [],
}