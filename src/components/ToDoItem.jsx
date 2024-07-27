import React from 'react'
import { Card, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import {Check, Delete } from '@mui/icons-material'

const ToDoItem = ({title}) => {
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
        <Typography variant='p' component='p'>{title}</Typography>
        <div >
          <IconButton> <Check sx={{color: 'green'}}/> </IconButton>
          <IconButton> <Delete sx={{color: 'red'}}/> </IconButton>
        </div>
      </CardContent>
      </Card>
    </>
  )
}

export default ToDoItem