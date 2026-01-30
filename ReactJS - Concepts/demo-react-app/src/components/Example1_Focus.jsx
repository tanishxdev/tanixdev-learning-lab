import { useRef } from "react";

function Example1_Focus() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h3>useRef Example 1: DOM Access</h3>

      <input ref={inputRef} placeholder="Click button to focus" />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default Example1_Focus;
