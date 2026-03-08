import { useState } from "react";
import "./TextMirror.css";

function TextMirror() {
  // State to store input text
  const [text, setText] = useState("");

  // Input change handler
  function handleChange(e) {
    setText(e.target.value); // input value → state
  }

  return (
    <div className="mirror-container">
      <h1>Live Text Mirror</h1>

      {/* Input controlled by state */}
      <input
        type="text"
        placeholder="Type something..."
        value={text} // state → input
        onChange={handleChange} // input → state
      />

      <h1>Output 👇</h1>
      {/* Live mirror */}
      <div className="mirror-output">{text}</div>
    </div>
  );
}

export default TextMirror;
