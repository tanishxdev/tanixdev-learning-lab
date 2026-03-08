import React, { useState } from "react";

const StateCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};

export default StateCounter;
