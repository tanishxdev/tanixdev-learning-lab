// TextMirror.jsx
import { useState } from "react";
import "./TextMirror.css";

function TextMirror() {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="text-mirror-container">
      <h2>Live Text Mirror</h2>

      {/* Input box (not connected yet) */}
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
      />

      {/* This will show mirrored text later */}
      <p>{text.length === 0 ? "Start typing to see live preview..." : text}</p>
    </div>
  );
}

export default TextMirror;
