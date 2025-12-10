import React, {useState} from 'react'

const StateCounter = () => {
  // state define
  const [count, setCount] = useState(0);

  // handler
  function handleIncrease() {
    setCount(count + 1 );
  }
  function handleDecrease() {
    setCount(count - 1 );
  }
  return (
    <div>
      <h1>Current Count : {count}</h1>

      {/* clicked => state changes => UI updates */}
      <button onClick={handleIncrease} className='bg-green-800 m-2 p-2'> Increase </button>
      <button onClick={handleIncrease} className='bg-red-800 m-2 p-2'> Decrease </button>
    </div>
  )
}

export default StateCounter