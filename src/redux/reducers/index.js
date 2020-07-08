import { combineReducers } from "redux"
import loginReducer from "./login"
import productReducer from "./student"
import qualificationReducer from "./qualification"

//combina los reducers
export default combineReducers({
    users: loginReducer,
    students : productReducer,
    qualifications: qualificationReducer
})