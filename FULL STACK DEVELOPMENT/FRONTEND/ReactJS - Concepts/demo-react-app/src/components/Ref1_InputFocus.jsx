import { useRef } from "react";

function Ref1_InputFocus() {

  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h3>useRef Example 1: Input Focus</h3>

      <input ref={inputRef} placeholder="Click button to focus" />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default Ref1_InputFocus;
