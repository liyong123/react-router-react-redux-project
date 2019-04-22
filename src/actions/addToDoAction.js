import { ADD_TODO, SET_VISIBILITY_FILTER ,TOGGLE_TODO } from './addTodoActionType'

let nextTodoId = 0;
export const addTodo = text => async dispatch => {
    dispatch({
        type: ADD_TODO,
        id: nextTodoId++,
        text
    })
};

export const setVisibilityFilter = filter => async dispatch => {
    dispatch({
      type: SET_VISIBILITY_FILTER,
      filter
    })
};

export const toggleTodo = id => async dispatch => {
    dispatch({
        type: TOGGLE_TODO,
        id
    })
};

export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
