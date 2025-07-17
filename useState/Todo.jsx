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
   <div style={{ padding: "20px" }}>
      <h2> Todo App</h2>
      <input
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
      />
      
    </div>
 )
}
export default Todo;