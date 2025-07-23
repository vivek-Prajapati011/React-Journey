import React from "react";
import { useState } from "react";

const MultiForm = () => {
    const[formData, setFormData] = useState({name:"", email:""})
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Submitted Name: ${formData.name}\nSubmitted Email: ${formData.email}`)


    }
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
    return (
        <>
        <form onSubmit={handleSubmit}>
        <input 
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        />
        <input 
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        />
         <button type="submit">submit</button>
        </form>
        </>
        
    )
    
    
}

export default MultiForm