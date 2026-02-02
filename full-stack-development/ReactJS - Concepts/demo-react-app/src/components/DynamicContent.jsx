// DynamicContent.jsx
// Demonstrates how React renders changing data.

function DynamicContent() {

  // Dynamic data
  const userName = "Tanish";
  const age = 21;
  const isLoggedIn = false;

  return (
    <div>
      <h2>Dynamic Content Example</h2>

      {/* Variable rendering */}
      <p>Name: {userName}</p>
      <p>Age: {age}</p>

      {/* Expression rendering */}
      <p>Next Year Age: {age + 1}</p>

      {/* Boolean condition display */}
      <p>Status: {isLoggedIn ? "Online" : "Offline"}</p>
    </div>
  );
}

export default DynamicContent;
