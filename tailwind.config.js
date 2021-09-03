module.exports = {
  purge: ["./*.html", "./*.js"],
  darkMode: false, // or 'media' or 'class'
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
