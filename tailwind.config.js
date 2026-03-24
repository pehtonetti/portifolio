/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ivory': '#FAF8F5',
        'charcoal': '#2C2B29',
        'blush': '#D4A373',
        'blush-hover': '#C28B59',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
