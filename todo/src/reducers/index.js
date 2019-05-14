import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions';

const initialState = {
  todos: [
    {
      name: 'one',
      complete: false,
    },
    {
      name: 'two',
      complete: false,
    },
    {
      name: 'three',
      complete: false,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        payload: action.payload,
      };
    case TOGGLE_TODO:
      return {
        ...state,
        payload: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        payload: action.payload,
      }
    default:
      return state;
  }
};
