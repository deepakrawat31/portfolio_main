/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      titillium: ['Titillium Web', 'sans-serif'],
    },
    extend: {
      spacing: {
        '22': '5.5rem',
      },
      backgroundImage: theme => ({
        'portfolio-img': "url('./assets/drportfolio.png')",
        'product-img': "url('./assets/productpage.png')",
      }),
    },
  },
  plugins: [],
}