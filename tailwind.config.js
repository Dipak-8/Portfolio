/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        "deep-blue": "#1E293B",           
        blue: "#cafaf8",                   
        red: "#9CA3AF",                   
        yellow: "#F4C430",                
        grey: "#F3F4F6",                  
        "dark-grey": "#4B5563",           
        "opaque-black": "rgba(17,24,39,0.3)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
        certificate1: "url('./assets/certificate1.png')",
        certificate2: "url('./assets/certificate2.png')",
        certificate3: "url('./assets/certificate3.png')",
      },
    },
    screens: {
      xs: "480px",
      // ss: "620px",
      sm: "768px",
      md: "1060px",
      // lg: "1200px",
      // xl: "1700px",
    },
  },
  plugins: [],
}

