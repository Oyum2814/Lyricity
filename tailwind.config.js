/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        as: "url('./as.png')",
      }),
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}