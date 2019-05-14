import React from 'react';
import './Todo.css';

const Todo = (props) => {

  const handleOnClick = () => {
    // props.toggleTodo(props.id);
    props.deleteTodo(props.id);
  }

  const toggleClass = props.completed ? 'completed' : '';

  return (
    <div onClick={handleOnClick} className={`Todo ${toggleClass}`}>
      {props.value}
      <span></span>
    </div>
  );
}
 
export default Todo;
