/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      widest: '5px'
    },
    extend: {
      backgroundImage: {
        "main-bg-image": "url('./src/assets/img/bg-image-1.jpg')"
      },
      fontFamily: {
        "century-gothic": ["Century Gothic", "sans-serif"]
      },
      colors: {
        "main-yellow": "#fedd59"
      },
      dropShadow: {
        'yellow': '0 0 10px rgba(254, 221, 89, 0.30)',
      },
      fontSize: {
        "xxs": ".6rem"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}