import { ADD_TODO, TOGGLE_TODO } from '../actions/addTodoActionType'

const addTodoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      );
    case 'addText':
      return [
          ...state,
          {
            id:5,
            text:action.res,
            completed:false
          }
      ];
    default:
      return state
  }
};

export default addTodoReducer
