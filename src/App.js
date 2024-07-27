import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import TodoForm from './components/TodoForm';
import { useState } from 'react';

function App() {

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'Play',
      isDone: false
    },
    {
      id: 2,
      title: 'Read',
      isDone: false
    },
    {
      id: 3,
      title: 'Train',
      isDone: false
    },
    {
      id: 4,
      title: 'Train',
      isDone: false
    }
  ])


  return (
    <div className="App">
      <TodoForm />
      <ToDoList todos={todo}/>
    </div>
  );
}

export default App;
