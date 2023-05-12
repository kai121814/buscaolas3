/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'headblue': '#1C496B',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'botgr': '#00A99D',
        'orangee': '#FFA800',
        'skyblue':'#00A99D',
        'teal' : '#008080',
        'midgrey' : '#F0F0F0',
        'dblue' : '#557790',
        'textgr': '#3C3C3B',
        'inputgr': '#E5E5E5',



      
      }
    },
  },
  plugins: [

    require('@tailwindcss/aspect-ratio'),
  ],
}

