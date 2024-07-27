import React from 'react'
import ToDoItem from './ToDoItem'
import { Container } from '@mui/material'

const ToDoList = ({todos}) => {
  return (
    <>
    <Container>
        {
          todos.map((todo) =>(  
            <ToDoItem key={todo.id} title={todo.title}/>
          ))
        }
    </Container>
    </>
  )
}

export default ToDoList;