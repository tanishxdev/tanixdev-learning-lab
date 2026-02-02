import useCounter from "../hooks/useCounter";

function CounterComponent() {
  const { count, increase, decrease } = useCounter(10);

  return (
    <div>
      <h3>Custom Counter Hook</h3>
      <p>{count}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default CounterComponent;
