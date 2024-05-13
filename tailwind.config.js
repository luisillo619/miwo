/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'istok': ['"Istok Web"', 'sans-serif'],
        'josefin': ['"Josefin Sans"', 'sans-serif']
      },
     
        boxShadow: {
          'prices': '-4px 0 8px -4px rgba(0, 0, 0, 0.1), 4px 0 8px -4px rgba(0, 0, 0, 0.1), 0 12px 12px -6px rgba(0, 0, 0, 0.3)'
        }
      
    }
  },
  plugins: [],
}