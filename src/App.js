import React, { useState, useRef } from 'react';

import './App.css';
// import './Cover.css';

import TodoList from './Components/TodoList';
import Form from './Components/Form';
import Time from "./Components/Time"
import Footer from './Components/Footer';
import Error from './Components/Error';


function App () {

  const [todos, setTodose] = useState([])
  const [isError, setIsError] = useState(false)
  const [recurringItem, setRecurringItem] = useState("")
  
  const texts = useRef([])
  
  
  const Add = (text) => {

    if(texts.current.includes(text)){
      setRecurringItem(text)
      setIsError(!isError)
      
    }else if(text === ""){
      setTodose([...todos])
      console.log(text)
    }else{
    
      setTodose([...todos, {
         text: text,
         id: Math.random(),
         done: false,
         time: Time()
      }]) 
       
      texts.current.push(text)
    }
  }

  const ClearDoneTodo = () => {
    setTodose(todos.filter( todo => !todo.done ))
  }

  const CompletedTodo = () => {
    setTodose([...todos])
  }

  const DeleteAllTodo = () => {
    setTodose([])
  }

  const CloseError = () => {
    setIsError(!isError)
  }

  return (
    <div className="App">

      {isError? <div className="Cover"></div>: null}

      {isError? <Error recurringItem={recurringItem} CloseError={CloseError}/>: null }

      <div className="App_Container">

           <div className="Title_App">ToDo list</div>
              
              <Form Add={Add} />
              <TodoList 
                 todos={todos} 
                 Delete={(todo) => {
                   setTodose(todos.filter( t => t.id !== todo.id ))
                 }}
                 CompletedTodo={CompletedTodo}    
             />
              <Footer 
                 todos={todos} 
                 ClearDoneTodo={ClearDoneTodo}
                 DeleteAllTodo={DeleteAllTodo}     
             />

      </div>
    </div>
  )
}

export default App;

