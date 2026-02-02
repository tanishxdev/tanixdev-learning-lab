import React, {useState} from 'react'

const ReRenderCycle = () => {
    console.log("Components Rendered")
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return (
    <div>
        <h2>Count : {count}</h2>

        <button onClick={handleClick} className='bg-green-800 m-2 p-2'>
            Increase Count
        </button>
    </div>
  )
}

export default ReRenderCycle