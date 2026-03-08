// ListData.jsx
// Demonstrates rendering list of data using map().

function ListData() {

  // Array of users (data source)
  const users = [
    "Tanish",
    "Rahul",
    "Amit",
    "Neha",
    "Riya"
  ];

  return (
    <div>
      <h2>List of Users</h2>

      {/* Mapping array to JSX */}
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListData;
