import { useState } from "react";
import "./ScreenBgColor.css";

function ScreenBgColor() {
  // State controls the background color of the screen
  const [bgColor, setBgColor] = useState("#121212");

  // Toggle between dark and light background
  function handleChangeColor() {
    setBgColor((prev) => (prev === "#121212" ? "#f5f5f5" : "#121212"));
  }

  // Decide text color based on background (basic contrast handling)
  const textColor = bgColor === "#121212" ? "#eaeaea" : "#121212";

  return (
    <div
      className="screen-bg-container"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <h2>Screen Background Color</h2>

      <p className="description">
        This project demonstrates how React State controls UI appearance.
      </p>

      <button onClick={handleChangeColor} className="toggle-btn">
        Toggle Background
      </button>
    </div>
  );
}

export default ScreenBgColor;
