import { useState } from "react";

function Example1_NoMemo() {
  const [count, setCount] = useState(0);

  function slowCalculation(num) {
    console.log("Heavy calculation running...");
    for (let i = 0; i < 100000000; i++) {}
    return num * 2;
  }

  const result = slowCalculation(count);

  return (
    <div>
      <h3>Without useMemo</h3>
      <p>Result: {result}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Example1_NoMemo;
