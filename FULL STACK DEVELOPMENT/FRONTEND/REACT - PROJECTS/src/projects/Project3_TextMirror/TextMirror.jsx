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
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
      />

      <div className="mirror-output">{text}</div>
    </div>
  );
}

export default TextMirror;
