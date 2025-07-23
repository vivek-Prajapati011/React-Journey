import React from "react";
import { useState } from "react";

const MultiForm = () => {
    const[formData, setFormData] = useState({name:"", email:""})
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Submitted Name: ${formData.name}\nSubmitted Email: ${formData.email}`)


    }
    return (
        <>
        <input type="text"
        value={formData.name}
        onChange={(e)=> setFormData(e.target.value)}
        />
        <input type="email"
        value={formData.email}
        onChange={(e)=> setFormData(e.target.value)}
        />
        <button>submit</button>
        </>
        
    )
    
    
}

export default MultiForm