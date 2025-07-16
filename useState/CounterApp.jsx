import React from "react"
import { useState } from "react"

const CounterApp = () => {
    const [count, setcount] = useState(0)
    const countterBtn = () => {
        setcount(count+1)
    }
    
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count}</h1>
      <button onClick={countterBtn}>Increase</button>
    </div>
    )
}

export default CounterApp