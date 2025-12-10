import { useState } from "react";

function Counter() {

  const MIN = 0;
  const MAX = 10;

  const [count, setCount] = useState(0);

  // Increase only if below max
  const increase = () => {
    if (count < MAX) {
      setCount(prev => prev + 1);
    }
  };

  // Decrease only if above min
  const decrease = () => {
    if (count > MIN) {
      setCount(prev => prev - 1);
    }
  };

  // Reset counter
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="w-full max-w-sm bg-white text-black p-6 rounded-xl shadow-lg text-center">

      <h2 className="text-2xl font-semibold mb-4">
        Smart Counter
      </h2>

      <p className="text-4xl font-bold mb-6">
        {count}
      </p>

      {/* Buttons Section */}
      <div className="flex justify-center gap-4 mb-4">

        <button
          onClick={decrease}
          disabled={count === MIN}
          className={`px-4 py-2 rounded-md text-white font-medium 
            ${count === MIN 
              ? "bg-gray-400 cursor-not-allowed" 
              : "bg-red-600 hover:bg-red-700"}`}
        >
          -
        </button>

        <button
          onClick={increase}
          disabled={count === MAX}
          className={`px-4 py-2 rounded-md text-white font-medium 
            ${count === MAX 
              ? "bg-gray-400 cursor-not-allowed" 
              : "bg-green-600 hover:bg-green-700"}`}
        >
          +
        </button>

      </div>

      <button
        onClick={reset}
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
      >
        Reset
      </button>

      <p className="mt-4 text-sm text-gray-600">
        Min: {MIN} | Max: {MAX}
      </p>

    </div>
  );
}

export default Counter;
