// Conditional.jsx
// Demonstrates rendering UI based on conditions.

function Conditional() {

  const isLoggedIn = true;
  const userRole = "admin";

  return (
    <div>
      <h2>Conditional Rendering Example</h2>

      {/* Using if-like logic with ternary */}
      {isLoggedIn 
        ? <p>Welcome back, user!</p>
        : <p>Please login</p>
      }

      {/* Logical AND rendering */}
      {userRole === "admin" && (
        <p>Admin Dashboard Access Granted</p>
      )}
    </div>
  );
}

export default Conditional;
