//to use state in our application we need to use the useState method  
import React, { useState } from 'react';
import TodoList from './todolist'

function App() {
  const [ todos, setTodos] = useState(['Todo 1', 'Todo 2']);
  return (
    //pregnant element helps return multiple elements
    //todos = prop
  <>
  <TodoList todos = {todos} />
  <input type='text' />
  <button>Add Todo</button>
  <button>Clear completed</button>
  <div>0 left Todos</div>
  </>
    
  );
};

export default App;
