/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
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
