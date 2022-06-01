import React from "react";
import { useLocation } from "react-router-dom";
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

const Theme = ({ children }) => {
  const location = useLocation();
  theme.location = location.pathname;
  return (
    <ThemeProvider location={location.pathname} theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
