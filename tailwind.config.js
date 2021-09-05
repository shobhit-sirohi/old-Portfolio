module.exports = {
  purge: ["./*.html", "./*.js"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mont: "Montserrat",
      },
      fontSize: {
        "6xxl": "4rem",
      },
      flex: {
        50: "30% 0 auto",
      },
      colors: {
        blue1: "#188CD8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
