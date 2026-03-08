import React, { useState } from "react";

/*
====================================================
USESTATE DEEP DIVE
This component demonstrates:
- Multiple state variables
- Independent updates
- Internal working clarity
====================================================
*/

function UseStateDeep() {

  // First state variable (number)
  const [count, setCount] = useState(0);

  // Second state variable (string)
  const [message, setMessage] = useState("Hello");

  function increaseCount() {
    setCount(count + 1);
  }

  function changeMessage() {
    setMessage("State Updated");
  }

  return (
    <div>

      <h2>Count: {count}</h2>
      <button onClick={increaseCount} className='bg-green-800 m-2 p-2'>
        Increase Count
      </button>

      <hr />

      <h2>Message: {message}</h2>
      <button onClick={changeMessage}>
        Change Message
      </button>

    </div>
  );
}

export default UseStateDeep;
