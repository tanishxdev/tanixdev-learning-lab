import { useState } from "react";
import "./CharCounter.css";

const CharCounter = () => {
  const MAX_LIMIT = 50;
  const [text, setText] = useState("");

  // Derived validation (no extra state)
  const isEmpty = text.trim().length === 0;

  function handleChange(event) {
    const newText = event.target.value;

    // Prevent exceeding character limit
    if (newText.length <= MAX_LIMIT) {
      setText(newText);
    }
  }

  return (
    <div className="char-counter-container">
      <h2>Character Counter</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
      />

      <p>
        {isEmpty
          ? "Start typing to count characters"
          : `${text.length} / ${MAX_LIMIT} characters`}
      </p>
    </div>
  );
};

export default CharCounter;
