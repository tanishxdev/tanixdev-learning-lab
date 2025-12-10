import PropTypes from "prop-types";

// UserProfile Component
function UserProfile({ name, age, role }) {
  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}

/*
  Defining PropTypes for this component
  This validates what type of data should come
*/
UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  role: PropTypes.string
};

export default UserProfile;
