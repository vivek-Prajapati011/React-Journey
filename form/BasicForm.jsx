import React from "react";
import { useState } from "react";

const BasicForm = () => {
    const[email, setEmail] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Submitted Name: ${email}`)


        
        

    }

return (
    <>
    <form>
        <label>
            entre your gmail
            <input 
               type="email"
               onChange={
                (e) => setEmail(e.target.value)

               }
            />
        </label>
        <button onClick={handleSubmit}>submit</button>
    </form>
    </>
)
}

export default BasicForm