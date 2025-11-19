import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";


import { BiasProvider } from "./context/BiasContext";
import { MBTIProvider } from "./context/MBTIContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <BiasProvider>
      <MBTIProvider>
          <App />
      </MBTIProvider>
    </BiasProvider>
    </BrowserRouter>
  </StrictMode>
);