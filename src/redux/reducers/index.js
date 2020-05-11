import { combineReducers } from 'redux'
import loginReducer from './login'
import productReducer from './student'

//combina los reducers
export default combineReducers({
    users: loginReducer,
    students : productReducer
})