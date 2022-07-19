/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Epilogue: ["Epilogue", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        herobg: "url('../src/assets/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
