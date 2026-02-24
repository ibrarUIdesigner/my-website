import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/globals.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
// Ensure dark mode is applied before React mounts
const html = document.documentElement;
html.classList.remove("light");
html.classList.add("dark");
const container = document.getElementById("root");
if (!container) {
    throw new Error("Root container not found");
}
const root = createRoot(container);
root.render(_jsx(React.StrictMode, { children: _jsx(BrowserRouter, { children: _jsx(AuthProvider, { children: _jsx(App, {}) }) }) }));
