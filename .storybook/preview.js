import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import themes from '../src/themes';
import "../src/scss/styles.scss";  

const theme = themes.lightTheme;

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
