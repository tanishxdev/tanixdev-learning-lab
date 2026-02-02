import { useState } from "react";
import "./ShowHideText.css";

export const ShowHideText = () => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }
  return (
    <div className="toggle-container">
      <h2>Show / Hide Content</h2>

      <button onClick={toggleVisibility}>{isVisible ? "Hide" : "Show"}</button>

      {isVisible && (
        <p className="content">This content is conditionally rendered.</p>
      )}
    </div>
  );
};
