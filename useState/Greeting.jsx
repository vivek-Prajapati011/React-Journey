import React from "react";
import { useState } from "react";

const Greeting = () => {
   const[name, setName] = useState("")
   return(
       <div>
        <input 
           type="text" 
           value={name} 
           onChange={ (e) => {setName(e.target.value) }
        } 
        />
        <p>Hello, {name || "Guest"}!</p>

       </div>
   )
}

export  default Greeting 