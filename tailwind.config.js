/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#f021b2',
        'green': '#30b985',
        'orange': '#fa5b0f',
        'red': '#8492a6',
      }
    },
  },
  plugins: [],
}

