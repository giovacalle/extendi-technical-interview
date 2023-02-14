/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#272643',
        secondary: '#ffffff',
        tertiary: '#e3f6f5',
        quaternary: '#bae8e8',
        quinary: '#2c698d',
      },
    },
  },
  plugins: [],
};
