// src/App.js
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Homepage";
import About from "./pages/About";
import Services from "./pages/Services";
import Donate from "./pages/Donate";
import HttpsRedirect from './components/HttpsRedirect';

import { initGA, logPageView } from "./ga";

const GAListener = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location]);

  return null;
};

const App = () => {
  useEffect(() => {
    initGA(); // Initialize GA once on app load
  }, []);

  return (
    <Router>
      <HttpsRedirect />
      <GAListener />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Donate" element={<Donate />} />
      </Routes>
    </Router>
  );
};

export default App;
