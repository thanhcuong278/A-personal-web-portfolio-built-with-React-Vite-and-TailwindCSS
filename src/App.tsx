// path: src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { ThemeProvider } from "./context/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header"; // 🧩 Thêm dòng import này

export default function App() {
  console.log("🔵 App rendered");

  return (
    <ThemeProvider>
      <ErrorBoundary>
        {/* Header cố định toàn cục */}
        <Header />

        {/* Thêm padding-top để tránh bị header che nội dung */}
        <div id="app-root" className="min-h-screen pt-20 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
