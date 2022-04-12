const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [plugin(function ({addUtilities}){
    const fonts = {
      '.font-delius':{
        fontFamily: "'Delius Swash Caps', cursive"
      },
      '.font-mali':{
        fontFamily: "'Mali', cursive"
      }
    } 
    addUtilities(fonts)
  })],
}
