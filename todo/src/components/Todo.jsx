import React from 'react';

const Todo = (props) => {

  const handleOnClick = () => {
    props.toggleTodo(props.id);
  }

  return (
    <div onClick={handleOnClick}>
      {props.name}
    </div>
  );
}
 
export default Todo;
