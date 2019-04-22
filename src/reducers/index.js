import { combineReducers } from 'redux'
import addToDoReducer from './addToDoReducer'
import visibilityFilterReducer from './visibilityFilterReducer'
import homeReducer from './homeReducer'
import apiTestReducer from './apiTestReducer'

export default combineReducers({
    addToDoReducer,
    visibilityFilterReducer,
    homeReducer,
    apiTestReducer
})
