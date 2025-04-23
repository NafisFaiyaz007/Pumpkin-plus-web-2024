// src/ga.js
import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-E8P951C8P5"); // replace with your Measurement ID
};

export const logPageView = (url) => {
  ReactGA.send({ hitType: "pageview", page: url });
};

export const logPdfDownload = (fileName) => {
  ReactGA.event({
    category: "Download",
    action: "PDF Opened",
    label: fileName,
  });
};