import React from 'react';
import './Todo.css';

const Todo = (props) => {
  const toggleClass = props.completed ? 'completed' : '';

  return (
    <div className='Todos'>
      <span className={`Todo ${toggleClass}`} onClick={() => props.toggleTodo(props.id)}>{props.value}</span>
      {
        props.completed && <span className='delete' onClick={() => props.deleteTodo(props.id)}> &times;</span>
      }
    </div>
  );
}
 
export default Todo;
