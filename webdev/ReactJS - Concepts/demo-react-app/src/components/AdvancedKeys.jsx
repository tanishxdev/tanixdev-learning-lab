// AdvancedKeys.jsx
// Demonstrates correct use of unique keys.

function AdvancedKeys() {

  const users = [
    { id: "u1", name: "Tanish" },
    { id: "u2", name: "Rahul" },
    { id: "u3", name: "Amit" }
  ];

  return (
    <div>
      <h2>Advanced Keys Example</h2>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdvancedKeys;
