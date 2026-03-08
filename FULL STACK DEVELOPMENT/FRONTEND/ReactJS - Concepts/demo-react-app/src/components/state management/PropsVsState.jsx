import React, { useState } from "react";

/*
====================================================
PROPS VS STATE DEMONSTRATION
====================================================
Parent component sends a label using props.
Child component manages counter using state.
====================================================
*/

function CounterDisplay({ title, subtitle }) {
  // STATE: internal, managed by component itself
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div>

      {/* PROPS: received from parent */}
      <h2>{title}</h2>

      {/* STATE: internal changing data */}
      <p>Count: {count}</p>


      <button onClick={increaseCount} className='bg-green-800 m-2 p-2'>
        Increase
      </button>

      {/* PROPS: received from parent */}
      <h2>{subtitle}</h2>
    </div>
  );
}

/*
Parent Component
This sends data to child using PROPS
*/
function PropsVsState() {
  return (
    <div>
      <CounterDisplay title="Counter using Props + State" subtitle="subtitle - keep logic unchanged"/>
    </div>
  );
}

export default PropsVsState;
