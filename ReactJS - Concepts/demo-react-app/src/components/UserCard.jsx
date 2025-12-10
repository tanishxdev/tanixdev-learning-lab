// UserCard.jsx
// This component receives props from parent.

function UserCard(props) {
  return (
    <div>
      <h3>User Information</h3>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Role: {props.role}</p>
    </div>
  );
}

export default UserCard;
