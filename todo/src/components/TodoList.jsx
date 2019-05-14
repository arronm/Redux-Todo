import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <div className="TodoList">
      {
        props.todos.map(todo => <Todo key={todo.id} {...todo} toggleTodo={props.toggleTodo} />)
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps, { toggleTodo })(TodoList);
