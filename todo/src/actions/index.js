export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (name) => {
  return {
    type: ADD_TODO,
    payload: name,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};
