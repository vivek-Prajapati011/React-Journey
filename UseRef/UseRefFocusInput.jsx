import React from "react";
import { useRef } from "react";

const UseRefFocusInput = () => {
   const inputRef = useRef(null)
   const handleFocus = () => {
    inputRef.current.focus()
   }

   return (
    <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleFocus}>focus input</button>
    </div>
   )
}




export default UseRefFocusInput
