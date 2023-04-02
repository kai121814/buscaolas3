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
        'topgr': '#1C496B',
        'botgr': '#00A99D',
        'orangee': '#FFA800',
<<<<<<< HEAD
        'pastel' : '#FF5733',
      },
=======
        'skyblue':'#00A99D',

      }
>>>>>>> 0bb7db34423f828b6a912828b861fdce4d630fd9
    },
  },
  plugins: [],
}

