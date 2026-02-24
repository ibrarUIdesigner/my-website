import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/globals.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import LoadingProvider from "./context/LoadingContext";
import LoadingOverlay from "./components/LoadingOverlay";

// Ensure dark mode is applied before React mounts
const html = document.documentElement;
html.classList.remove("light");
html.classList.add("dark");

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root container not found");
}
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <LoadingProvider>
          <App />
          <LoadingOverlay />
        </LoadingProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
