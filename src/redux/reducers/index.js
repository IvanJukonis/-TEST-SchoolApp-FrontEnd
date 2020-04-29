import { combineReducers } from 'redux'
import loginReducer from './login'

//combina los reducers
export default combineReducers({
    users: loginReducer
})