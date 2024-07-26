import { createTheme, ThemeOptions } from '@mui/material/styles';
import '@mui/styles';

const palette = {
  primary: {
    main: '#5A5BEB',
    light: '#ACADF5',
    dark: '#4F4FC3',
  },
  secondary: {
    main: '#E0A225',
    light: '#EFD192',
    dark: '#BA8825',
  },
  error: {
    main: '#D21A4D', 
    light: '#E98CA6',
    dark: '#5A5BEB',
  },
  success: {
    main: '#26A66B',
    light: '#92D3B5',
    dark: '#258B5D',
  },
  warning: {
    main: '#E0A225',
    light: '#EFD192',
    dark: '#BA8825',
  },
  grey: {
    300: '#EDF0F7',
    600: '#7C7D7E',
    700: '#606060',
    800: '#353535',
  },
  text: {
    primary: '#211F23',
    secondary: '#7C7D7E',
  },
  background: {
    default: '#F8F9FC',
    paper: '#FFFFFF', 
  },
};

const typography = {
  fontFamily: 'DM Sans, sans-serif',
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
    lineHeight: '110%',
  },
  subtitle2: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: '160%',
  },
  body1: {
    fontSize: 16,
    fontWeight: 400,
  },
  body2: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '160%',
  },
  caption: {
    fontSize: 12,
    fontWeight: 400,
  },
  button: {
    textTransform: 'none' as 'none',
  },
};

const themeOptions: ThemeOptions = {
  palette,
  typography,
};

const theme = {
  darkTheme: createTheme({ ...themeOptions, palette: { ...themeOptions.palette, mode: 'dark' } }),
  lightTheme: createTheme({ ...themeOptions, palette: { ...themeOptions.palette, mode: 'light' } }),
};

export default theme;
