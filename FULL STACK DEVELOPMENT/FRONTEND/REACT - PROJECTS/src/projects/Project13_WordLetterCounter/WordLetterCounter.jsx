import { useState } from "react";
import "./WordLetterCounter.css";

function WordLetterCounter() {
  // Step 1: state
  const [text, setText] = useState("");

  // Step 3: character count
  const charCount = text.length;

  // Step 4: word count (handle empty case)
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  // Step 6: limit
  const maxLimit = 100;

  return (
    <div className="container">
      <h2>Word & Letter Counter</h2>

      {/* Step 2: textarea */}
      <textarea
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Stats */}
      <div className="stats">
        <p>Characters: {charCount}</p>
        <p>Words: {wordCount}</p>

        {/* limit warning */}
        {charCount > maxLimit && (
          <p className="warning">Character limit exceeded!</p>
        )}
      </div>
    </div>
  );
}

export default WordLetterCounter;
