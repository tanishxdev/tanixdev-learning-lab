import { useState, useEffect } from "react";
// useState  -> to store API data in component state
// useEffect -> to run side-effect (API call) after component renders

function Effect3_API() {
  // State to store list of users fetched from API
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from external API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json()) // convert response to JS object
      .then((data) => setUsers(data)); // store data in state
  }, []);
  // Empty dependency array => run only once (on component mount)

  return (
    <div>
      <h3>Example 3: API Data</h3>

      <ul>
        {users.map((user) => (
          // key helps React identify each list item uniquely
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Effect3_API;
