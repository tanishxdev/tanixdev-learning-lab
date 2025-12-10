import { useContext } from "react";
import UserContext from "../context/UserContext";

function DeepChild() {

  const userName = useContext(UserContext);

  return (
    <div>
      <h3>Deep Child Component</h3>
      <p>Received User: {userName}</p>
    </div>
  );
}

export default DeepChild;
