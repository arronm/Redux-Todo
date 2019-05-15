import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <div className="TodoList">
      {
        props.todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            toggleTodo={props.toggleTodo}
            deleteTodo={props.deleteTodo}
          />
        ))
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps, { toggleTodo, deleteTodo })(TodoList);
