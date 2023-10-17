import { useState } from "react"
import "./Footer.css"

function Footer ({todos, ClearDoneTodo, DeleteAllTodo}) {

   const quantityOfDonetodo = todos.filter( todo => todo.done ).length

   return (
    <div className="Footer_Container">

        <div className="div_All_Done">
             <span>{quantityOfDonetodo}/{todos.length}</span>
             <button onClick={ClearDoneTodo}>Clear the all done</button>
        </div>
        <div className="div_Delete_Button">
            <button onClick={DeleteAllTodo}>DELETE ALL TODO</button>
        </div>
    </div>
   )
}

export default Footer