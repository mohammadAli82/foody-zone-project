import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";

const GlobleStyle = createGlobalStyle`
*{
  box-sizing:border-box;
  margin:0;
  padding:0;  
}
body{
  background-color:lightblue;
  min-height:100vh;
}


`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobleStyle />
    <App />
  </React.StrictMode>
);
reportWebVitals();
