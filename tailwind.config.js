/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "/images/BoxOut.png",
        'footer-texture': "/images/BoxOut.png",
      }
    },
    container: {
      center: true,
      padding: '2rem',
      maxWidth: {
        default: '800px'
      }
    },
  },
  plugins: [],
}

