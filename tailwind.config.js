/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      padding: '1rem',
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "url('/images/hero.png')",
        grid: "url('/images/grid.png')",
      },
      colors: {
        primary:{
          DEFAULT: '#000000',
          hover:'#343e4a'
        },
        secondary:'#4d5053',
        accent:{
          DEFAULT: '#000000',
          secondary: '#f4f0ec',
          hover: '#b88c5d',
        }
      }
    },
  },
  plugins: [],
};
