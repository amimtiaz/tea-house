/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        zIndex: {
            '100': '100',
          },

          backgroundImage: {
            'hero-pattern': "url('/')",
            'footer-texture': "url('/img/footer-texture.png')",
          }
      },
    },
    plugins: [],
  }