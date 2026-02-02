import { useState, useEffect } from "react";

function Effect2_Dependency() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed to:", count);
  }, [count]);

  return (
    <div>
      <h3>Example 2: Dependency Effect</h3>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Effect2_Dependency;
