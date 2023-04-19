import { useState } from "react";

export const Footer=()=>{
 const [todos, setTodos]=useState();
 const deleteTodo=()=>{
    const newTodos=todos.filter(todo => {
        return todo.complete===false
    })

 }
    return(
        <div className="delete">
        <button> Delete done tasks</button>
        <button onClick={deleteTodo}>Delete all tasks</button>
    </div>
    )
}