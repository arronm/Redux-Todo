import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
  todos: [],
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
    default:
      return state;
  }
}