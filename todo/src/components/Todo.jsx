import React from 'react';
import './Todo.css';

const Todo = (props) => {

  const handleOnClick = () => {
    props.toggleTodo(props.id);
  }

  const toggleClass = props.completed ? 'completed' : '';

  return (
    <div onClick={handleOnClick} className={`Todo ${toggleClass}`}>
      {props.value}
    </div>
  );
}
 
export default Todo;
