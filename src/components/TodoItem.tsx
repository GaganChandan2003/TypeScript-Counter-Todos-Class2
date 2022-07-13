import React from 'react'
import { TodoItems } from './Todos'
const TodoItem = ({id,title,status}:TodoItems) => {
  return (
    <div style={{display:"flex",flexDirection:'column',marginBottom:'20px'}}>
        <span>{title}</span>
        <span>{`${id}-${status}`}</span>
    </div>
  )
}

export default TodoItem