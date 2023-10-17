import { useState, useRef } from "react"
import Time from "./Time"
import "./TodoItem.css"

function TodoItem ({todo, Delete, CompletedTodo}) {

   const [CssTextDecoration, setCssTextDecoration] = useState(true)
   const timeToFinish = useRef(false)

   const showHide = () => {
       if(CssTextDecoration){
        setCssTextDecoration(!CssTextDecoration)
        todo.done = true
        timeToFinish.current = true
        CompletedTodo()
       }else{
        setCssTextDecoration(!CssTextDecoration)
        todo.done = false
        timeToFinish.current = false
        CompletedTodo()
       }
   }



   return (
      <div className="TodoItem_Container">
        <div style={{opacity: `${CssTextDecoration? 1: 0.3}`}}>
          <div className="Text" style={{textDecoration: `${CssTextDecoration? "none": "line-through"}`}}>{todo.text}</div>
          <div className="Time" style={{textDecoration: `${CssTextDecoration? "none": "line-through"}`}}>
             
             <span>time to add</span> {todo.time}
             
             {timeToFinish.current? <span style={{textDecoration: `${CssTextDecoration? "none": "line-through"}`}}>time to finish {Time()}</span>: null}
          
          </div>
          <div className="Buttons">
            <button className="Done_button" onClick={showHide}>Done/Or not</button>
            <button className="Delete_button" onClick={() => {
                Delete(todo)
            }}>Delete</button>
          </div>
        </div> 
      </div>
   )
}

export default TodoItem