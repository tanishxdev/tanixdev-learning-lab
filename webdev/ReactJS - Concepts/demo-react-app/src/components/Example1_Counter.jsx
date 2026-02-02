import { useState } from "react";

// Simple counter showing memory + update
function Example1_Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Example 1: Simple Counter</h3>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default Example1_Counter;
