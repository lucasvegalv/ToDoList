import React from 'react'
import { FormControl, Container, FormLabel, FormGroup, TextField, Button, Select, MenuItem, Typography } from '@mui/material'

const TodoForm = () => {

  const handleSubmit = () => {

  }

  return (
    <>
      <Container sx={{ marginTop: 5}}>
      <Typography variant='h2' component='h1' sx={{marginY: 2}}>To Do List</Typography>
        <form onSubmit={handleSubmit}>
          <FormControl maxWidth='md'>
            <TextField label="What you got to do?" placeholder='Read 10 pages' required />
            <Button variant="contained" color='primary' type='submit' sx={{marginTop: 1}}>Add Task</Button>
          </FormControl>
        </form>
      </Container>
    </>
  )
}

export default TodoForm