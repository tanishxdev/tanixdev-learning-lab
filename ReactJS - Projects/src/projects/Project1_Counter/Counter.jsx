import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncreament = () => {
    setCount(count + 1);
  };
  const hadnleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } 
  };
  const handleRest = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <p>{count}</p>

      <div className="btn-group">
        <button onClick={handleIncreament}>+</button>
        <button onClick={hadnleDecrement}>-</button>
        <button onClick={handleRest}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
