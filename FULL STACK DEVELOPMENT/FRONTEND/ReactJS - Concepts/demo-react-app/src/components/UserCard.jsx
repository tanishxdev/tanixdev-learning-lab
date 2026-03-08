export const UserCard = (props) => {
  return (
    <div>
      <h3>User Info</h3>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Role: {props.role}</p>
    </div>
  );
};
