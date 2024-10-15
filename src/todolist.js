import React from 'react'
import Todo from './Todo'

//TodoList = component
export default function TodoList({todos, toggleTodo}) {
  return (
    //print all todos
   todos.map(todo=> {
    //pass the toggle function to each todo
    return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
   })
  );
};

