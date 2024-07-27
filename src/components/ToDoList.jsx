import React from 'react'
import ToDoItem from './ToDoItem'
import { Container } from '@mui/material'

const ToDoList = ({ todos, checkTodo, deleteTodo }) => {

  return (
    <>
    <Container>
        {
          todos.map((todo) => (   
            <ToDoItem 
              key={todo.id} 
              title={todo.title} 
              id={todo.id} 
              isDone={todo.isDone}
              checkTodo={checkTodo} 
              deleteTodo={deleteTodo}
              />
          ))
        }
    </Container>
    </>
  )
}

export default ToDoList;