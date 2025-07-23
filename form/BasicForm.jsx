import React from "react";
import { useState } from "react";

const BasicForm = () => {
    const[email, setEmail] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()

    }

return (
    <>
    <form>
        <label>
            entre your gmail
            <input 
               type="email"

            />
        </label>
        <button onClick={handleSubmit}>submit</button>
    </form>
    </>
)
}

export default BasicForm