import { useState, useMemo } from "react";

function Example2_UseMemo() {
  const [count, setCount] = useState(0);

  function slowCalculation(num) {
    console.log("Heavy calculation running...");
    for (let i = 0; i < 100000000; i++) {}
    return num * 2;
  }

  const result = useMemo(() => {
    return slowCalculation(count);
  }, [count]);

  return (
    <div>
      <h3>With useMemo</h3>
      <p>Result: {result}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Example2_UseMemo;
