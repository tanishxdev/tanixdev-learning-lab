import { useState } from "react";
import "./ScreenBgColor.css";

function ScreenBgColor() {
  // State jo background color store karega
  const [bgColor, setBgColor] = useState("#343131"); // default dark

  return (
    // Inline style me state use ho raha hai
    <div className="screen-container" style={{ backgroundColor: bgColor }}>
      <h2>Screen Background Color</h2>

      <div className="buttons">
        <button onClick={() => setBgColor("#ff2200")}>Dark</button>
        <button onClick={() => setBgColor("#ff6600")}>Light</button>
        <button onClick={() => setBgColor("#8ddf00")}>Red</button>
        <button onClick={() => setBgColor("#002aff")}>Green</button>
        <button onClick={() => setBgColor("#ff00b3")}>Blue</button>
      </div>
    </div>
  );
}

export default ScreenBgColor;
