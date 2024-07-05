import { Theme, ThemeOptions, createTheme } from '@mui/material/styles';
import '@mui/styles';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

const palette: ThemeOptions['palette'] = {
  primary: {
    main: '#5A5BEB',
    light: '#5A5BEB'
  },
  secondary: {
    main: '#E0A225',
    light: '#E0A225'
  },
  grey: {
    300: '#EDF0F7',
    600: '#797a7a',
    700: '#606060',
    800: '#353535',
    900: '#7C7D7E'
  },
  text: {
    primary: '#211F23',
    secondary: '#7C7D7E'
  },
  background: {
    default: '#F8F9FC'
  }
};

const typography: ThemeOptions['typography'] = {
  fontFamily: 'DMSans, sans-serif', 
  h1: {
    fontSize: 85,
    fontWeight: 700
  },
  h2: {
    fontSize: 60,
    fontWeight: 700
  },
  h3: {
    fontSize: 40,
    fontWeight: 700
  },
  h4: {
    fontSize: 32,
    fontWeight: 700
  },
  h5: {
    fontSize: 28,
    fontWeight: 700
  },
  h6: {
    fontSize: 24,
    fontWeight: 800
  },
  subtitle1: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: '110%'
  },
  subtitle2: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: '160%'
  },
  body1: {
    fontSize: 16,
    fontWeight: 400
  },
  body2: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '160%'
  },
  caption: {
    fontSize: 12,
    fontWeight: 400
  },
  button: {
    textTransform: 'none'
  }
};

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    ...palette
  },
  typography
};

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    ...palette
  },
  typography
};

const themes = {
  darkTheme: createTheme(darkThemeOptions),
  lightTheme: createTheme(lightThemeOptions)
};

export default themes;
