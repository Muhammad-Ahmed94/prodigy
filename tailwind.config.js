/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        circular_web: ['circular-web', 'sans-serif'],
        general: ['general', 'sans-serif'],
        robert_medium: ['robert-medium', 'sans-serif'],
        robert_regular: ['robert-regular', 'sans-serif'],
        zentry_regular: ['zentry-regular', 'sans-serif']
      },
      colors: {
        blue: {
          50: '#dfdff0',
          75: '#dfdff2',
          100: '#f0f2fa',
          200: '#010101',
          300: '#4fb7dd',
        },
        voilet: {
          300: '#5724ff'
        },
        yellow: {
          100: '#8e983f'
        },
        feature: {
          primary: '#DFDFF2',
          secondary: '#595961',
        }
      }
    }
  },
  plugins: [],
};
