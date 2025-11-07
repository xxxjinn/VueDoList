/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F4F8FB',
          100: '#E3EFF6',
          200: '#CFE3EF',
          300: '#B4D2E8',
          400: '#A7C7DD',
          500: '#5F9FCC',
          600: '#3C83B9',
        },
      },
    },
  },
  plugins: [],
};
