import PropTypes from "prop-types";

export const UserCard3_ProtoTypes = ({ name, age, role }) => {
  return (
    <>
      <h1>UserCard3_ProtoTypes</h1>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </>
  );
};

UserCard3_ProtoTypes.PropTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  role: PropTypes.string.isRequired,
};
