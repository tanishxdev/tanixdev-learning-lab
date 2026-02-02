import { useState } from "react";
import "./ThemePreview.css";

const THEMES = {
  light: {
    background: "#ffffff",
    color: "#000000",
    border: "#cccccc",
  },
  dark: {
    background: "#1e1e1e",
    color: "#ffffff",
    border: "#444444",
  },
  blue: {
    background: "#e3f2fd",
    color: "#0d47a1",
    border: "#90caf9",
  },
};

function ThemePreview() {
  const [theme, setTheme] = useState("light");

  const currentTheme = THEMES[theme];

  return (
    <div className="theme-container">
      <h2>Theme Preview Box</h2>

      <div className="controls">
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("dark")}>Dark</button>
        <button onClick={() => setTheme("blue")}>Blue</button>
      </div>

      <div
        className="preview-box"
        style={{
          backgroundColor: currentTheme.background,
          color: currentTheme.color,
          borderColor: currentTheme.border,
        }}
      >
        This is a preview box
      </div>
    </div>
  );
}

export default ThemePreview;
