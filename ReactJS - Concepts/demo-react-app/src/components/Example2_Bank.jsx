import { useReducer } from "react";

function bankReducer(state, action) {
  switch (action.type) {
    case "deposit":
      return { balance: state.balance + 100 };

    case "withdraw":
      return { balance: state.balance - 100 };

    case "reset":
      return { balance: 0 };

    default:
      return state;
  }
}

function Example2_Bank() {
  const [state, dispatch] = useReducer(bankReducer, { balance: 0 });

  return (
    <div>
      <h3>Bank Account</h3>
      <p>Balance: ₹{state.balance}</p>

      <button onClick={() => dispatch({ type: "deposit" })}>
        Deposit ₹100
      </button>

      <button onClick={() => dispatch({ type: "withdraw" })}>
        Withdraw ₹100
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}

export default Example2_Bank;
