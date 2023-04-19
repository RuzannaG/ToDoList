import { useState } from "react"


export  const Header=()=>{
 const [text, setText]=useState()

const changText=(event)=>{
    setText(event.target.value)
}

const handleClik=event=>{
    event.preventDefault();
    alert(text)
}
   return(
        <div className="header">
             <h1>Add your todo-items</h1>
             <div className="border">
            <input onChange={(event)=>changText(event)} className="inp" type="text" placeholder="New Todo"/>
             <button   onClick={handleClik} type="submit" className='btn'>Add new task</button>
             </div>
        </div>
    )
}