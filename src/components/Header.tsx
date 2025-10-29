/**
 * Header / Navbar component
 * - Accessible nav with links to Home and Projects
 * - Theme toggle button
 */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Header(): JSX.Element {
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary text-white shadow-md backdrop-blur-md bg-opacity-95 transition-colors duration-300">
      <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Link to="/" aria-label="Trang chủ">
            <h1 className="text-xl font-semibold">💻 My Portfolio</h1>
          </Link>
          <ul className="hidden md:flex gap-4 ml-4">
            <li>
              <Link
                to="/"
                className={`hover:underline ${pathname === "/" ? "underline" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`hover:underline ${pathname === "/projects" ? "underline" : ""}`}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light/Dark Mode"
            className="rounded px-3 py-1 bg-white/10 hover:bg-white/20"
          >
            {theme === "light" ? "🌙" : "🔆"}
          </button>
          <a
            href="mailto:thanhcuong27898@gmail.com"
            onClick={() =>
              window.alert(
                "Thank you for your interest! Your message will be opened in your email application."
              )
            }
            className="hidden md:inline-block bg-white/10 hover:bg-white/20 px-3 py-1 rounded"
            aria-label="Send Email"
          >
            Contact
          </a>
          <button
            className="md:hidden ml-2 px-2 py-1 rounded bg-white/10"
            onClick={() => {
              window.location.href = "/projects";
            }}
            aria-label="Go to Projects page"
          >
            📁
          </button>
        </div>
      </nav>
    </header>
  );
}
