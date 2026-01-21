// UserCard2.jsx
// Demonstrates prop destructuring.

const UserCard2 = ({ name, age, role, exp }) => {
  return (
    <div>
      <h3>User Information</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
      <p>Experience: {exp}</p>
    </div>
  );
};

export default UserCard2;
