import { useState } from "react";
import "./ColorBoxApp.css";

function ColorBoxApp() {
  // Step 1: State for colors
  const [colors, setColors] = useState(["red", "blue", "green"]);

  // Step 2: Input state
  const [input, setInput] = useState("");

  // Step 5: Add new color
  const addColor = () => {
    // prevent empty input
    if (input.trim() === "") return;

    // update array immutably
    setColors([...colors, input]);

    // clear input
    setInput("");
  };

  return (
    <div className="container">
      <h2>Color Box App</h2>

      {/* Input section */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter color"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={addColor}>Add</button>
      </div>

      {/* Step 2: Render boxes */}
      <div className="box-container">
        {colors.map((color, index) => (
          <div
            key={index}
            // dynamic styling
            className="color-box"
            style={{ backgroundColor: color }}
          >
            {color}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorBoxApp;
