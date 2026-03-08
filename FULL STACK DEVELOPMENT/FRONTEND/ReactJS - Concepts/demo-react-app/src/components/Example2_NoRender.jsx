import { useRef } from "react";

function Example2_NoRender() {
  const countRef = useRef(0);

  function increase() {
    countRef.current += 1;
    console.log("Current count:", countRef.current);
  }

  return (
    <div>
      <h3>useRef Example 2: No Re-render</h3>
      <button onClick={increase}>
        Increase Hidden Count
      </button>
    </div>
  );
}

export default Example2_NoRender;
