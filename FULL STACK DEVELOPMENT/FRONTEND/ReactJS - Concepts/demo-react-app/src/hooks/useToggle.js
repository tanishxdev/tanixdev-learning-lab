import { useState } from "react";

function useToggle(initial = false) {
  const [value, setValue] = useState(initial);

  function toggle() {
    setValue(prev => !prev);
  }

  return [value, toggle];
}

export default useToggle;
