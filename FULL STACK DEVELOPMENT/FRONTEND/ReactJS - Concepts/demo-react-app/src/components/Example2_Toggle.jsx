import React, {useState} from 'react'

const Example2_Toggle = () => {
    const [isOn, setisOn] = useState(0);

  return (
    <div>
        <h3>Example 2: Toggle</h3>
        <p>Status: {isOn ? "ON" : "OFF"}</p>

        <button onClick={() => setisOn(!isOn)}>
            Toggle
        </button>
    </div>
  )
}

export default Example2_Toggle