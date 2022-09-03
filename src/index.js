import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body,
button {
  background-color: #fffae6;
  font-family: "Inter", sans-serif;
}
h1,
h2 {
  color: #ff8a00;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
