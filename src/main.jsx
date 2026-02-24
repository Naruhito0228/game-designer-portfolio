import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Set theme BEFORE React renders (prevents white mode stuck)
const saved = localStorage.getItem("theme");
const theme = saved === "light" || saved === "dark" ? saved : "dark";
if (theme === "dark") document.documentElement.classList.add("dark");
else document.documentElement.classList.remove("dark");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);