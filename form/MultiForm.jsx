import React from "react";
import { useState } from "react";

const MultiForm = () => {
    const[formData, setFormData] = useState({name:"", email:""})
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