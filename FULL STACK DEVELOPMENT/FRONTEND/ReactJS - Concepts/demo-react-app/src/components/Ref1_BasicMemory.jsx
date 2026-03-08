import { useRef } from "react";

function Ref1_BasicMemory() {

  const counterRef = useRef(0);

  function increase() {
    counterRef.current++;
    console.log("Stored Value:", counterRef.current);
  }

  return (
    <div>
      <h3>useRef Example 1: Basic Memory</h3>
      <p>Check console for value</p>

      <button onClick={increase}>
        Increase (No UI Change)
      </button>
    </div>
  );
}

export default Ref1_BasicMemory;
