import { useState } from "react";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  // Boolean state
  const [isOn, setIsOn] = useState(false);

  // Toggle function
  function toggle() {
    setIsOn(!isOn); // flip state
  }

  return (
    <div className="toggle-container">
      <h1>Toggle Switch</h1>

      <button onClick={toggle} className="toggle-btn">
        {isOn ? "ON" : "OFF"}
      </button>

      <div className={`toggle-status ${isOn ? "on" : "offf"}`}>
        Status: {isOn ? "ON" : "OFF"}
      </div>
    </div>
  );
}

export default ToggleSwitch;
