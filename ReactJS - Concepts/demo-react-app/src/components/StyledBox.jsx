// StyledBox.jsx
// Demonstrates multiple styling methods in React.

import "../styles/StyledBox.css";

function StyledBox() {
  // Inline style object
  const inlineStyle = {
    color: "black",
    backgroundColor: "yellow",
    padding: "10px",
  };

  return (
    <div>
      <h2>React Styling Example</h2>

      {/* External CSS */}
      <div className="box">This uses External CSS Styling</div>

      {/* Inline Styling */}
      <div style={inlineStyle}>This uses Inline Styling</div>
    </div>
  );
}

export default StyledBox;
