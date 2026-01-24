import { useState } from "react";
import "./CharCounter.css";

function CharCounter() {
  // Real state
  const [text, setText] = useState("");

  const LIMIT = 50;

  // Input handler
  function handleChange(e) {
    const value = e.target.value;

    // limit check
    if (value.length <= LIMIT) {
      setText(value);
    }
  }

  // Derived data (not state)
  const charCount = text.length; // state se calculate

  return (
    <div className="char-container">
      <h1>Character Counter</h1>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
      />

      <div className="char-count">
        Characters: {charCount} / {LIMIT}
      </div>
    </div>
  );
}

export default CharCounter;
