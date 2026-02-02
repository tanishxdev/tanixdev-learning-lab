import React, { useState } from "react";

function StateUpdateQueue() {

  const [count, setCount] = useState(0);

  function handleMultipleUpdates() {

    // These both read the SAME old value of count
    setCount(count + 1);
    setCount(count + 1);

    console.log("After setCount calls, count is still:", count);
  }

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={handleMultipleUpdates}>
        Increase Twice (Incorrect Way)
      </button>
    </div>
  );
}

export default StateUpdateQueue;
