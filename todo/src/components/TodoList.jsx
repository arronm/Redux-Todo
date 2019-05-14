import React from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps, {})(TodoList);
