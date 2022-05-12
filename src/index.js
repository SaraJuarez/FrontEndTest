import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Theme from "./Theme";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";

const container = document.getElementById("root");
const root = createRoot(container);
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }`;
root.render(
  <BrowserRouter>
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
