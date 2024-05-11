/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'istok': ['"Istok Web"', 'sans-serif'],
        'josefin': ['"Josefin Sans"', 'sans-serif']
      },
     
    }
  },
  plugins: [],
}