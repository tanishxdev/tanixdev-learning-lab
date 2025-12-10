// EventDemo.jsx
// Demonstrates event handling in React.

function EventDemo() {

  // Event handler function
  function handleClick() {
    alert("Button was clicked!");
  }

  // Event with parameter
  function showMessage(name) {
    alert("Hello " + name);
  }

  return (
    <div>
      <h2>React Events Example</h2>

      {/* Basic click event */}
      <button onClick={handleClick}>
        Click Me
      </button>

      {/* Passing parameter */}
      <button onClick={() => showMessage("Tanish")}>
        Greet User
      </button>
    </div>
  );
}

export default EventDemo;
