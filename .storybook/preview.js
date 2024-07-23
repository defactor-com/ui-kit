import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import themes from "../src/themes";
import "./index.css";
import "./global.css";
import React from "react";

const theme = themes.lightTheme;

export const decorators = [
  (Story, context) => {
    React.useEffect(() => {
      const rootElement = document.getElementById("root");
      if (rootElement) {
        if (context.kind === "v2/FormElements/Dropzone") {
          rootElement.classList.add("width100");
        } else {
          rootElement.classList.remove("width100");
        }
      }
    }, [context.kind]);

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    );
  },
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
