import React from "react";
import { useEffect } from "react";

const Timer = () => {
   useEffect( () =>{
    const intervalId = setInterval(() => {
      console.log("Tick")
    }, 1000);

    return () => {
      clearInterval(intervalId)
      console.log("Timer stopped")
    };
    },[])

    return  (
    <div>
      <h2>Timer is running...</h2>
    </div>
  )
      
}

export default Timer