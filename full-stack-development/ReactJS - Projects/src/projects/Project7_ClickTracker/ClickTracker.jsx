import { useState } from "react";
import "./ClickTracker.css";

export const ClickTracker = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="click-container">
      <h2>Click Tracker</h2>
      <button className="click-btn" onClick={handleClick}>
        Click me
      </button>
      <p>Total Clicks: {count}</p>
    </div>
  );
};
