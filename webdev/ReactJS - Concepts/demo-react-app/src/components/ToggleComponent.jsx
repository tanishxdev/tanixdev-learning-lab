import useToggle from "../hooks/useToggle";

function ToggleComponent() {
  const [isOn, toggle] = useToggle();

  return (
    <div>
      <h3>Toggle using Custom Hook</h3>
      <p>Status: {isOn ? "ON" : "OFF"}</p>
      <button onClick={toggle}>Change</button>
    </div>
  );
}

export default ToggleComponent;
