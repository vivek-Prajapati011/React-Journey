import React from "react";
import { useReducer } from "react";

const Counter = () => {
    const intialState = {count : 0}
    const reducer = (state, action) => {
        switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
 }
  const[state, dispatch] = useReducer(reducer, intialState)

  return (
     <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button> {/**calling the dispatch function with an action object */}
        <button  onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
        <button  onClick={() => dispatch({ type: "REST" })}>REST</button>
     </div>
  )


   

}

export default Counter