import React from 'react'
import { Card, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import {Check, Delete } from '@mui/icons-material'

const ToDoItem = ({ title, id, checkTodo, isDone, deleteTodo }) => {

  const completeTask = () => {
    checkTodo(id);
  }

  const deleteTask = () => {
    deleteTodo(id);
  }

  const style = isDone ? { textDecoration: 'line-through'} : { textDecoration: 'none'}

  return (
    <>
      <Card variant='outlined' sx={{marginTop: 2}}>
      <CardContent   sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 0,
        '&:last-child': { paddingBottom: 0 },
       }}>
        <Typography variant='p' component='p' sx={style}>{title}</Typography>
        <div >
          <IconButton onClick={completeTask}> <Check sx={{color: 'green'}}/> </IconButton>
          <IconButton onClick={deleteTask}> <Delete sx={{color: 'red'}}/> </IconButton>
        </div>
      </CardContent>
      </Card>
    </>
  )
}

export default ToDoItem