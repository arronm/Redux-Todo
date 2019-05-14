import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import TodoList from './components/TodoList';

const App = (props) => {
  return (
    <div className="App">
      <TodoList todos={props.todos} />
    </div>
  );
}
 
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps, {})(App);
