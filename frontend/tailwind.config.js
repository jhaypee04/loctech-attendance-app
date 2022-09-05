/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        darkest_purple: '#44054b',
        darker_purple: '#521f86',
        purple: '#b636d6',
        red: '#e90052',
        light_blue: '#45bfe6',
        dark_blue: '#133e73',
      },
      backgroundImage: {
        'hero': "url('/public/images/bg.png')",
        'two-circles': "url('/public/images/two-circles.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
