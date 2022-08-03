/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/{index.html,cadastro.html,login.html,recuperar.html,editar_perfil.html}",
    "./src/js/script.js"
  ],
  theme: {
    extend: {
      colors: {
        lightgreen: '#77FFC0',
        green: '#00FF88',
        darkBlue: '#201B2C',
        darkBlue2: '#2F2841',
        lightPurple: '#867D98',
        purple: '#514869'
      },
      fontFamily: {
        'NotoSans': ['Noto Sans', 'sans-serif']
      },
      boxShadow: {
        'first': '0 10px 40px #00000056',
        'second': '0 10px 40px -12px #00FF8052'
      },
      screens: {
        'note': {'max': '1200px'}
      }
    },
  },
  plugins: [],
}