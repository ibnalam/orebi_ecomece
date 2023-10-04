/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ['DM Sans']
    },
    fontSize: {
      39 : "39px",
      49 : "49px"
    },
    colors: {
     ' offwhite': '#F0F0F0',
      'ash': '#ECE6E6',
      'pera': '#767676',
      'line': '#D8D8D8',
      'input': '#767676'
    },
    maxWidth: {
      "container": '1604px',
      644 : "644px" ,
    },
    width: {
      '48': '48%',
      '23': '23%'
    }
  },
  },
  plugins: [],
}

