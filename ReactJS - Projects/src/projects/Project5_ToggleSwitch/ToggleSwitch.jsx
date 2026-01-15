import { useState } from "react";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  const [on, setOn] = useState(false);

  return (
    <div className="toggle-container">
      <button
        className={`toggle-btn ${on ? "on" : "off"}`}
        onClick={() => setOn(!on)}
      >
        {on ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default ToggleSwitch;
