import { Theme } from "@mui/material";
import { ThemeOptions, createTheme } from "@mui/material/styles";
import "@mui/styles";

import { DMSans } from "../src/fonts/dm-sans-font";

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

const brandingTheme = JSON.parse(
  process.env.NEXT_PUBLIC_THEMING_CONFIG || "{}"
);

const palette: ThemeOptions["palette"] = {
  primary: brandingTheme.primary || {
    main: "#5A5BEB",
    light: "#ACADF5",
    dark: "#4F4FC3",
  },
  secondary: brandingTheme.secondary || {
    main: "#E0A225",
    light: "#EFD192",
    dark: "#BA8825",
  },
  error: brandingTheme.error || {
    main: "#D21A4D",
    light: "#E98CA6",
    dark: "#5A5BEB",
  },
  success: brandingTheme.success || {
    main: "#26A66B",
    light: "#92D3B5",
    dark: "#258B5D",
  },
  warning: brandingTheme.warning || {
    main: "#E0A225",
    light: "#EFD192",
    dark: "#BA8825",
  },
  grey: brandingTheme.grey || {
    300: "#EDF0F7",
    600: "#797a7a",
    700: "#606060",
    800: "#353535",
  },
  text: brandingTheme.text || {
    primary: "#211F23",
    secondary: "#7C7D7E",
  },
  background: brandingTheme.background || {
    default: "#F8F9FC",
  },
};

const typography: ThemeOptions["typography"] = {
  fontFamily: DMSans.style.fontFamily,
  h1: {
    fontSize: 85,
    fontWeight: 700,
  },
  h2: {
    fontSize: 60,
    fontWeight: 700,
  },
  h3: {
    fontSize: 40,
    fontWeight: 700,
  },
  h4: {
    fontSize: 32,
    fontWeight: 700,
  },
  h5: {
    fontSize: 28,
    fontWeight: 700,
  },
  h6: {
    fontSize: 24,
    fontWeight: 800,
  },
  subtitle1: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: "110%",
  },
  subtitle2: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: "160%",
  },
  body1: {
    fontSize: 16,
    fontWeight: 400,
  },
  body2: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "160%",
  },
  caption: {
    fontSize: 12,
    fontWeight: 400,
  },
  button: {
    textTransform: "none",
  },
};

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    ...palette,
  },
  typography,
};

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    ...palette,
  },
  typography,
};

export default {
  darkTheme: createTheme(darkThemeOptions),
  lightTheme: createTheme(lightThemeOptions),
};
