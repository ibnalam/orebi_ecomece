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
    fontsize : {
      39 : "39px",
      49 : "49px"
      
    },
    colors: {
     ' offwhite': '#F0F0F0',
      'ash': '#ECE6E6',
    },
    maxWidth: {
      "container": '1604px',
      644 : "644px" ,
    },
  },
  },
  plugins: [],
}

