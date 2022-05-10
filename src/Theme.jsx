import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    blue: "#3a86ff",
    violet: "#8338ec",
    pink: "#ff006e",
    orange: "#fb5607",
    green: "#06d6a0",
    yellow: "#ffbe0b",
    /* new color */
    darkBlue: "#03045e",
    lightBlue: "#caf0f8",
    mediumBlue: "#00b4d8",
    navBlue: "#90e0ef",
  },
  fonts: ["sans-serif", "Roboto"],
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
