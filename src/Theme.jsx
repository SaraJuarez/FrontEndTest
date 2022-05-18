import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    darkBlue: "#03045e",
    lightBlue: "#caf0f8",
    mediumBlue: "#00b4d8",
    navBlue: "#90e0ef",
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
