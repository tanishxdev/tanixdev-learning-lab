import { useUser } from "../context/UserContext";

function DeepChild() {
  const { userName } = useUser(); // Direct access

  return (
    <div>
      <h4>Deep Child Component</h4>
      <p>Received User: {userName}</p>
    </div>
  );
}

export default DeepChild;
