/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        page:'#F2F3F5',
        base:'#FFFFFF',
      },
      colors:{

        'darker':'#CDD0D6',
        'dark':'#D4D7DE',
        'base':'#DCDFE6',
        'light':'#E4E7ED',
        'lighter':'#EBEEF5',
        'extra-light':'#F2F6FC',

        'tt-primary':'#303133',
        'tt-regular':'#606266',
        'tt-secondary':'#909399',
        'tt-placeholder':'#A8ABB2',
        'tt-disable':'#C0C4CC',
      },

    },
  },
  plugins: [],
}

