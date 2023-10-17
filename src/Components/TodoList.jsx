import TodoItem from "./TodoItem"

function TodoList ({todos, Delete, CompletedTodo}) {

    return (
        <div>
           {todos.map((todo) => {
               return (
                <TodoItem 
                   key={todo.id} 
                   todo={todo} 
                   Delete={Delete}
                   CompletedTodo={CompletedTodo}  
                />
               )
           })}
        </div>
    )

}

export default TodoList