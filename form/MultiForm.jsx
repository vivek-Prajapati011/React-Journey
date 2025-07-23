import React from "react";
import { useState } from "react";

const MultiForm = () => {
    const[formData, setFormData] = useState({name:"", email:""})
    const handleSubmit = (e) => {
        e.preventDefault()


    }
    return (
        <>
        <input type="text"
        value={formData.name}
        />
        <input type="email"
        value={formData.email}
        />
        <button>submit</button>
        </>
        
    )
    
    
}

export default MultiForm