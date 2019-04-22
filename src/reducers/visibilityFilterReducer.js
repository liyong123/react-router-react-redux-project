import { visibilityFilters } from '../actions/addToDoAction';
import { SET_VISIBILITY_FILTER } from "../actions/addTodoActionType";

const { SHOW_ALL } = visibilityFilters;

const visibilityFilterReducer = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state
  }
};

export default visibilityFilterReducer
