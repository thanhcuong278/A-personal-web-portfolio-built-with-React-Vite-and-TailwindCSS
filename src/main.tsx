// path: src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";

console.log("🌱 main.tsx booting");

const root = document.getElementById("root");
if (!root) {
  console.error("❌ #root element not found in index.html");
} else {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ErrorBoundary> 
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>
  );
}
