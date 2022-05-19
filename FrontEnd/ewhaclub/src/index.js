import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "styles/globalStyles";
import GlobalFonts from "asset/fonts/font";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <GlobalFonts />
    <App />
  </BrowserRouter>
);
