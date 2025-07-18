import React from "react";
import { useState, useEffect } from "react";

const UseInfo = () => {
   const[loading, setloading] = useState("true")
   const [user, setUser] = useState([])
   const [error, setError] = useEffect(null)

   const datafetch = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        setUser(data);
        setloading(false);
    } catch {
         setError("failed to faith the user")
    }
   }

   useEffect( () => {
       datafetch()
   },[])

   return (
       <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <>
          <p style={{ color: "red" }}>{error}</p>
          <button onClick={datafetch}>Retry</button>
        </>
      ) : (
        <ul>
          {user.map((user) => (
            <li key={user.id}>
              {user.name} {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
   )

}

export default UseInfo