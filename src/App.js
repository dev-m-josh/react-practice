//to use state in our application we need to use the useState method  
import React, { useState, useRef, useEffect } from 'react';
import TodoList from './todolist'
import {v4} from 'uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  //useState will return an array
  const [ todos, setTodos] = useState([]);
  //todos = each todo in array
  const todoNameRef = useRef();

  //load the todos
  useEffect(()=>{
    //convert to an array
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])

  //to monitor change in array and store them in local storage
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);


  //add a new todo
  function handleAddTodo(e) {
    const name= todoNameRef.current.value;
    if (name === '') return
    setTodos(prevTodos =>{
      //add todos using a callback function
      return [...prevTodos, {id: v4(), name: name, complete: false}]
    })
    //clear the input form
    todoNameRef.current.value = null
      
 };

 //toggle todo to mark complete and vice ver
 function toggleTodo(id) {
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos)
};

 //clear todos that are completed
function handleClearTodos() {
  const newTodos = todos.filter(todo => !todo.complete)
  setTodos(newTodos)
}

  return (
    //pregnant element helps return multiple elements
    //todos = prop
  <>
  <input ref={todoNameRef} type='text' />
  <button onClick={handleAddTodo} >Add Todo</button>
  <button onClick={handleClearTodos}>Clear completed</button>
  <div>{todos.filter(todo => !todo.complete).length} todos left </div>
  <TodoList todos = {todos} toggleTodo={toggleTodo} />
  </>
    
  );
};

export default App;
