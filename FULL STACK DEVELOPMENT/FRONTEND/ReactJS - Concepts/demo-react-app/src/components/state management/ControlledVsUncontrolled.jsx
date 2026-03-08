import React, { useState, useRef } from "react";

function ControlledVsUncontrolled() {

  // CONTROLLED: state controls input value
  const [name, setName] = useState("");

  // UNCONTROLLED: ref to access DOM element directly
  const emailRef = useRef();

  function handleControlledChange(event) {
    setName(event.target.value);
  }

  function handleSubmit() {
    console.log("Controlled Name:", name);
    console.log("Uncontrolled Email:", emailRef.current.value);
  }

  return (
    <div>

      <h2>Controlled Input</h2>
      <input
        type="text"
        value={name}
        onChange={handleControlledChange}
        placeholder="Enter name"
      />

      <h2>Uncontrolled Input</h2>
      <input
        type="email"
        ref={emailRef}
        placeholder="Enter email"
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Submit
      </button>

    </div>
  );
}

export default ControlledVsUncontrolled;
