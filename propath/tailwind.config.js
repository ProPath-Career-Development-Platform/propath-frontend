/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#3f067a",
        "secondary": "#9a80d4",
        "grey": "#6a6969",
        "grey2": "#484848",
        "purple3": "#2b2e56"
      },
      fontSize: {
        "navbar" : "15px"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

