// src/index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./tailwind.css"; // Or your global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
