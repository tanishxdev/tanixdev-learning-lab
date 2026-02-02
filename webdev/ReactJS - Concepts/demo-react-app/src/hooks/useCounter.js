import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function increase() {
    setCount(prev => prev + 1);
  }

  function decrease() {
    setCount(prev => prev - 1);
  }

  return { count, increase, decrease };
}

export default useCounter;
