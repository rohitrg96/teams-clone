/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brandBlue: '#4E5FBF', // Your custom Teams-like color
      },
    },
  },
  plugins: [],
};
