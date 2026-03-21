import { useState } from "react";
import "./CharCounter.css";

const CharCounter = () => {
  const [text, setText] = useState("");
  const maxLimit = 100;
  const charCount = text.length;
  const remainingChars = maxLimit - charCount;

  const handleChange = (e) => {
    if (e.target.value.length <= maxLimit) {
      setText(e.target.value);
    }
  };
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
        Characters: {charCount} / {maxLimit}
      </div>
      <div className="remaining-chars">Remaining: {remainingChars}</div>
    </div>
  );
};

export default CharCounter;
