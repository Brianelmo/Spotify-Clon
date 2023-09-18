/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'card-bg': '#121212',
        'cardInter': '#242424' ,
        'navColor' :'rgb(83, 83, 83)',
        'card-home': '#a7a7a7',
        'gral-card': '#181818',
        'hover-card':'#fcf9f946;'
      }, 
      width: {
        '420': '420px',
        '80vw': '80vw',
        '480': '460px'
      } , 
      height: {
        '80vh': '85vh'
      }, 
      backgroundImage: {
        'bg-spoty': "url(./assets/fondo-spoti.png)"
      }
    },
  },
  plugins: [],
}

