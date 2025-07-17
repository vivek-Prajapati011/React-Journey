import React from "react";
import { useState } from "react";

const Todo = () => {
   const [task,setTask] = useState("")
   const[todo,setTodo] = useState([])

   const addTask = () => {
      if(task.trim() !== ""){
        setTodo([...task, todo])
        setTask("")
      }
   }

 return(
    <div>
  
    </div>
 )
}
export default Todo;