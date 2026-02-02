import { useState } from "react";

function VirtualDomDemo() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Virtual DOM Example</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default VirtualDomDemo;
