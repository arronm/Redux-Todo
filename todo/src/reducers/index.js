import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions';

const initialState = {
  todos: [
    {
      id: 0,
      value: 'one',
      completed: false,
    },
    {
      id: 1,
      value: 'two',
      completed: false,
    },
    {
      id: 2,
      value: 'three',
      completed: false,
    },
  ],
  nextId: 3,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.nextId,
            value: action.payload,
            completed: false,
          },
        ],
        nextId: state.nextId + 1,
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      }
    default:
      return state;
  }
};
