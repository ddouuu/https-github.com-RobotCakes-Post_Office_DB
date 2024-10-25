// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/styles.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/SessionProvider"; // Make sure this path is correct

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
