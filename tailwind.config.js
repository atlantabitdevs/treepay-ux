const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "dmr-purple-dark": "#1C1B1F",
      "dmr-purple-light": "#6750A4",
      ...colors
    },
    extend: {
      minHeight: {
        '1/2': '50%'
      },
      fontFamily: {
        body: ['Assistant', 'sans-serif'],
        display: ['Nunito', 'sans-serif']
      }
    }
  },
  plugins: [],
}
