// @flow

const primaryFontFamily = [
  "Poppins",
  "Helvetica Neue",
  "Arial",
  "sans-serif"
].join(",");

const secondaryFontFamily = `"Barlow", "Roboto", "Arial", sans-serif`;

const typography = {
  fontFamily: secondaryFontFamily,
  h1: {
    fontFamily: primaryFontFamily,
    fontWeight: 700
  },
  h2: {
    fontFamily: primaryFontFamily,
    fontWeight: 700
  },
  h3: {
    fontFamily: primaryFontFamily,
    fontWeight: 500
  },
  h4: {
    fontFamily: primaryFontFamily,
    fontWeight: 600
  },
  h5: {
    fontFamily: primaryFontFamily
  },
  h6: {
    fontFamily: primaryFontFamily
  }
};

const colors = {
  dataEstateBlue: "#0061A1",
  skyBlue: "#53b7e8",
  darkNavy: "#003d68",
  chalkGrey: "#e6e6e6",
  undergroundRed: "ef3f3d"
};

const palette = {
  primary: {
    main: colors.dataEstateBlue,
    dark: colors.dataEstateBlue,
    light: colors.skyBlue
  }
};

export const theme = {
  typography,
  palette
};

export default theme;
