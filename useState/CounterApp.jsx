import React from "react"
import { useState } from "react"

const CounterApp = () => {
    const [count, setcount] = useState(0)
    const countterBtn = () => {
        setcount(count+1)
    }

}

export default CounterApp