import React from 'react'
import "./todo.css"
const TodoItem = (el) => {
    
  
  return (
    <div className='todoitem'>
       <input type="radio" />
       <div>{el.info}</div>
    </div>
  )
}

export default TodoItem