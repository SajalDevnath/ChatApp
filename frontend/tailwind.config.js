const { color } = require("@chakra-ui/react");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'monster' : ['Montserrat', 'sans-serif'],
      },
      colors: {
        'paleWhite' : '#e5e5e5',
      }
    },
  },
  plugins: [],
}