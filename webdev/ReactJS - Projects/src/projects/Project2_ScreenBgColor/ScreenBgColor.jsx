import { useState } from "react";
import "./ScreenBgColor.css";

function ScreenBgColor() {
  // State jo background color store karega
  const [bgColor, setBgColor] = useState("#524f4d"); // default dark

  return (
    // Inline style me state use ho raha hai
    <div className="screen-container" style={{ backgroundColor: bgColor }}>
      <h1>Screen Background Color</h1>

      <div className="color-buttons">
        {/* Buttons state ko change kar rahe hain */}
        <button onClick={() => setBgColor("red")}>Red</button>
        <button onClick={() => setBgColor("blue")}>Blue</button>
        <button onClick={() => setBgColor("green")}>Green</button>
        <button onClick={() => setBgColor("Pink")}>Pink</button>
      </div>
    </div>
  );
}

export default ScreenBgColor;
