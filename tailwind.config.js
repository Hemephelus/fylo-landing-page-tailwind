/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          SignBg:'#1c2431',
          FootBg:'#0b1523',
          MainBg:'#181f2a',
          TestBg:'#202a3c',
        },
        accent:{
          errorClr: '#ff4242',
          blueGrd: '#339ecc',
          CyaneGrd: '#65e2d9',
        }
      },
      fontFamily:{
        body: ['"Open Sans"'],
        header: ['Raleway'],
      },
    },
  },
  plugins: [],
}
