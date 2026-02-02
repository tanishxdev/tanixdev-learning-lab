// StateDemo.jsx
// Demonstrates React state using useState hook.

import { useState } from "react";

function StateDemo() {
  // Creating state
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>State Example</h2>

      {/* Display current state */}
      <p>Count: {count}</p>

      {/* Update state on button click */}
      <button
        onClick={() => setCount(count + 1)}
        className="bg-gray-500 p-1  m-2"
      >
        Increase Count
      </button>
    </div>
  );
}

export default StateDemo;
