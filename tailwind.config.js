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
      dropShadow: {
        'yellow': '0 0 10px rgba(254, 221, 89, 0.30)',
      },
      fontSize: {
        "xxs": ".6rem"
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#fedd59",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#060409",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}