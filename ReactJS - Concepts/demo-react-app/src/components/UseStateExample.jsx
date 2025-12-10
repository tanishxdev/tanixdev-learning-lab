import React, { useState } from "react";

const UseStateExample = () => {
  const [age, setAge] = useState(0);

  // Increment age safely
  const incrementAge = () => {
    setAge(prev => prev + 1);
  };

  // Decrement age but not below 0
  const decrementAge = () => {
    setAge(prev => (prev > 0 ? prev - 1 : 0));
  };

  // Reset age to zero
  const resetAge = () => {
    setAge(0);
  };

  // Handle manual input
  const handleInputChange = (e) => {
    const value = Number(e.target.value);

    // Prevent negative values
    if (value >= 0) {
      setAge(value);
    }
  };

  return (
    <div>
      <h2>Age Control System</h2>

      <p>Current Age: {age}</p>

      {/* Manual Age Input */}
      <input
        type="number"
        value={age}
        onChange={handleInputChange}
      />

      <br /><br />

      {/* Control Buttons */}
      <button onClick={incrementAge}>Increment</button>
      <button onClick={decrementAge}>Decrement</button>
      <button onClick={resetAge}>Set Zero</button>

      <br /><br />

      {/* Voting Eligibility */}
      {age >= 18 ? (
        <p style={{ color: "green" }}>
          Congratulations, you can vote
        </p>
      ) : (
        <p style={{ color: "red" }}>
          You are not eligible to vote
        </p>
      )}

      {/* Driving Eligibility */}
      {age >= 16 ? (
        <p style={{ color: "blue" }}>
          You are eligible for learning driving license
        </p>
      ) : (
        <p style={{ color: "orange" }}>
          You are too young to drive
        </p>
      )}

      {/* Senior Citizen Message */}
      {age >= 60 && (
        <p style={{ fontWeight: "bold" }}>
          Senior Citizen Benefits Applicable
        </p>
      )}
    </div>
  );
};

export default UseStateExample;
