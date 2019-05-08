import { combineReducers } from 'redux'
import addToDoReducer from './addToDoReducer'
import visibilityFilterReducer from './visibilityFilterReducer'
import homeReducer from './homeReducer'
import apiTestReducer from './apiTestReducer'
import menuReducer from './menuReducer'
import headerReducer from "./headerReducer";

export default combineReducers({
    addToDoReducer,
    visibilityFilterReducer,
    homeReducer,
    apiTestReducer,
    menuReducer,
    headerReducer
})
