/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',

        // => @media (min-width: 375px) { ... }
  
        'desktop': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        primary: {
          SignBg:'#1c2431',
          FootBg:'#0b1523',
          MainBg:'#181f2B',
          TestBg:'#202a3c',
        },
        accent:{
          errorClr: '#ff4242',
          blueGrd: '#339ecc',
          CyaneGrd: '#65e2d9',
          CyaneGrdH:'#a3f2ed',
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
