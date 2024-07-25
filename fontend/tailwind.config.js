import { transform } from 'typescript';

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
        "image-1": "url('./public/assets/img/bg-image-1.JPG')",
        "image-2": "url('./public/assets/img/bg-image-2.jpg')",
        "image-3": "url('./public/assets/img/bg-image-3.jpg')"
      },
      fontFamily: {
        "century-gothic": ["Century Gothic", "sans-serif"]
      },
      dropShadow: {
        'yellow': '0 0 10px rgba(254, 221, 89, 0.30)',
      },
      fontSize: {
        "xxs": ".6rem"
      },
      keyframes: {
        'opacity-animation': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slide-in-navbar': {
          '0%': { transform: 'translateX(100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'slide-in-logo': {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'slide-in-page': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        'slide-out-page': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' }
        },
        'slide-in-home': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        'slide-out-home': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' }
        },
      },
      animation: {
        'opacity-animation': 'opacity-animation 2s ease-in-out',
        'slide-in-navbar': 'slide-in-navbar 4s ease-in-out',
        'slide-in-logo': 'slide-in-logo 4s ease-in-out',
        'slide-in-page': 'slide-in-page 1s forwards',
        'slide-out-page': 'slide-out-page 1s forwards',
        'slide-in-home': 'slide-in-home 1s forwards',
        'slide-out-home': 'slide-out-home 1s forwards'
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