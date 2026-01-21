const Child = ({ message }) => <h4>{message}</h4>;

const Parent = ({ message }) => <Child message={message} />;

export default function PropDrilling() {
  return <Parent message="Hello via props" />;
}
