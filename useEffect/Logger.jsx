import React from "react";
import { useEffect } from "react";

const Logger = () => {

   useEffect( () =>{
    console.log("mounted")
    return () => {
      console.log("Component unmounted ");
    };
},[])

return (
    <div>
      <h1>Check the console!</h1>
    </div>
  );

}

export default Logger