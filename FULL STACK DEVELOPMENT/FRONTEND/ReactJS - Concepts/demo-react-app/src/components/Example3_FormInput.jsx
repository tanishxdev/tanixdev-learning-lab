import { useState } from "react";

// Input field controlling using useState
function Example3_FormInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <h3>Example 3: Input State</h3>

      <input 
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>You typed: {name}</p>
    </div>
  );
}

export default Example3_FormInput;
