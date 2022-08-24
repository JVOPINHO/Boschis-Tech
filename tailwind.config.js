/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/{index.html,register.html,login.html,forgotPassword.html,editCustomer.html,error404.html,registerProduct.html,registerCustomer_concluded.html,editProfile.html}",
  ],
  theme: {
    extend: {
      colors: {
        lightgreen: '#77FFC0',
        green: '#00FF88',
        darkGreen: '#49AA26',
        darkBlue: '#201B2C',
        darkBlue2: '#2F2841',
        lightPurple: '#867D98',
        purple: '#514869',
        lightGray: '#D9D9D9',
        gray: '#999999',
        grayTwo: '#A7A7A7',
        red: '#FF0000',
        transparent: '#ffffff1a'
      },
      fontFamily: {
        'NotoSans': ['Noto Sans', 'sans-serif']
      },
      boxShadow: {
        'first': '0 10px 40px #00000056',
        'second': '0 10px 40px -12px #00FF8052'
      },
      screens: {
        'note': {'max': '1200px'},
        'phone': {'min': '375px', 'max': '639px'}
      }
    },
  },
  plugins: [],
}