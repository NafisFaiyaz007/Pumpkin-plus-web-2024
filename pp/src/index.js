// src/index.js

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage"; // Adjust path to match your actual file name
import About from "./pages/About"; // Adjust path to match your actual file name
import "./tailwind.css";
// import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
