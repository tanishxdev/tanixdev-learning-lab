import React, { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const Reducer1_Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count : {count}</p>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
};

export default Reducer1_Counter;
