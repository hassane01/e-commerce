/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // small phones
        xs: "480px",

        // default Tailwind
        sm: "640px",  // tablets & large phones
        md: "768px",  // small laptops & large tablets
        lg: "1003px", // desktops
        xl: "1280px", // large desktops
        "2xl": "1536px",

        // optional extra-large
        "3xl": "1920px",
      },
      colors:{
        topButton:"#3160d8",
      },
    },
  },
  
  plugins: [  
    require('@tailwindcss/aspect-ratio'),
  ],
}