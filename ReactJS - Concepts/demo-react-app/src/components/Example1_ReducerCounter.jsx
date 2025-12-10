import { useReducer } from "react";

// Reducer function
function reducer(state, action) {
  if (action.type == "increment") {
    return state + 1;
  }
  if (action.type == "decrement") {
    return state - 1;
  }

  return state;
}
const Example1_ReducerCounter = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h3>useReducer Counter</h3>
      <p>Count: {count}</p>

      <button onClick={() => dispatch({ type: "increment" })}>+</button>

      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};

export default Example1_ReducerCounter;
