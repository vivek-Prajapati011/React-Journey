import React from "react";
import { useState, useEffect } from "react";

const UseInfo = () => {
   const[loading, setloading] = useState("true")
   const [user, setUser] = useState([])

   const datafetch = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        setUser(data);
        setloading(false);
    } catch (error) {
         console.error("fail to fetc")
    }
   }

   useEffect( () => {
       datafetch()
   },[])

   return (
        <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {user.map((user) => (
            <li key={user.id}>
              {user.name}  {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
   )

}

export default UseInfo