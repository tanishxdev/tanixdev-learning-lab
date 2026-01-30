import { useEffect } from "react";

function Effect1_PageLoad() {
  useEffect(() => {
    console.log("Component Mounted - Page Loaded");
  }, []);

  return (
    <div>
      <h1>Example 1: Page Load Effect</h1>
      <p>Check console to see effect</p>
    </div>
  );
}

export default Effect1_PageLoad;
