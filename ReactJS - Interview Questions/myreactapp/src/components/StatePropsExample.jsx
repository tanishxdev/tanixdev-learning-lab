function Child({ message }) {
  return <p>{message}</p>;
}

function Parent() {
  return <Child message="Hello from parent" />;
}

const StatePropsExample = () => {
  return (
    <div>
      <h2>State & Props Example</h2>
      <Parent />
    </div>
  );
};

export default StatePropsExample;
