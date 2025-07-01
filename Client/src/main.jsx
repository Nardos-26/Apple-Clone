import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import "./commonResource/js/bootstrap.js";
import "./commonResource/js/custom.js";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
