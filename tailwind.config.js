module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_400: "#bbbbbb",
        white_A700: "#ffffff",
        colors: "#bd10e0",
        gray_901: "#1f1f1f",
        bluegray_900: "#2b2b2b",
        deep_orange_A700: "#eb1616",
        gray_900: "#202020",
        gray_900_00: "#20202000",
      },
      fontFamily: { oswald: "Oswald", roboto: "Roboto" },
      backgroundImage: {
        gradient: "linear-gradient(178deg ,#20202000,#202020)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
