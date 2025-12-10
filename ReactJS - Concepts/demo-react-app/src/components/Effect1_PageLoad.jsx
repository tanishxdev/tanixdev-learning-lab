import { useEffect } from "react";

function Effect1_PageLoad() {

  useEffect(() => {
    console.log("Component Mounted - Page Loaded");
  }, []);

  return (
    <div>
      <h3>Example 1: Page Load Effect</h3>
      <p>Check console to see effect</p>
    </div>
  );
}

export default Effect1_PageLoad;
