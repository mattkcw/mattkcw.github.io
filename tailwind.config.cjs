/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",

        "gradient-custom":
          "linear-gradient(90deg, #4ECDC4 0%, #7184b4 100%)",
        
        "mountains":
          "url('./assets/mountains.jpg')",
      }),
      fontFamily: {
        lora: ["Lora", "serif"],
        lato: ["Lato", "sans-serif"],
      },
      content: {
        brush: "url('./assets/images/brush.png')",
        person1: "url('./assets/images/person-1.png')",
        person2: "url('./assets/images/person-2.png')",
        person3: "url('./assets/images/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
