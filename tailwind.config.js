/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
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
        "container-width": "83.33%",
        "gallery": "87.77%",
        "seo-article": "576px"
      },
      spacing: {
        "buttons-padding-tb": "12px",
        "buttons-padding-lr": "24px"
      },
      borderRadius: {
        "buttons-radius": "8px"
      },
      borderWidth: {
        "buttons-secondary": "1px",
        "expand-button": "1.5px"
      },
      fontFamily: {
        "primary": "Roboto Condensed",
        "buttons": "Roboto Flex",
        "headers": "Bebas Neue"
      },
      fontSize: {
        "h1": "4.77rem",
        "h1-md": "4rem",
        "h1-sm": "3rem",
        "gallery-buttons": "0.94rem",
        "seo-header": "1.56rem",
        "seo-paragraph": "0.88rem"
      },
      lineHeight: { 
        "h1": "1.1"
      },
      letterSpacing: {
        "buttons": "-0.02em",
        "h1": "-0.04em",
        "h3": "-0.03em"
      }
    },
    screens: {
      xs: "419px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
  },
  plugins: [],
}