import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <div className="TodoList">
      {
        props.todos.map(todo => <Todo {...todo} />)
      }
    </div>
  );
}
 
export default TodoList;
