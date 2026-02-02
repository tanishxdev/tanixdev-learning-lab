import { useState, useEffect } from "react";

function Effect4_Timer() {

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(timer);

  }, []);

  return (
    <div>
      <h3>Example 4: Timer</h3>
      <p>Seconds: {seconds}</p>
    </div>
  );
}

export default Effect4_Timer;
