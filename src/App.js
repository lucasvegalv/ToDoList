import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import TodoForm from './components/TodoForm';
import { useState } from 'react';

function App() {

  const [todo, setTodo] = useState([])

  const addTodo = (text) => {
    const newTodo = {
      id: todo.length + 1,
      title: text,
      isDone: false
    }
    
    setTodo([...todo, newTodo]);
    console.log(todo)
  }

  const checkTodo = (id) => {
    setTodo(todo.map(todo => {
      if (todo.id === id) todo.isDone = true;
      return todo;
    }))
  }

  const deleteTodo = (id) => {
    setTodo(todo.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <TodoForm addTodo={addTodo}/>
      <ToDoList todos={todo} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
