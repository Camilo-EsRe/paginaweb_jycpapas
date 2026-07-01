/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        body: '0.04em',
        wide2: '0.08em',
      },
      transitionDuration: {
        400: '400ms',
      },
      colors: {
        cream: {
          50: '#fdf8f0',
          100: '#fdf3e3',
        },
      },
    },
  },
  plugins: [],
};
