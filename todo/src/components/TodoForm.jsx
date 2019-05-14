import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.value);
    this.setState(prevState => {
      return {
        ...prevState,
        value: '',
      };
    });
  };

  handleOnChange = (event) => {
    this.setState({
      ...this.state,
      value: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleOnChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addTodo })(TodoForm);
