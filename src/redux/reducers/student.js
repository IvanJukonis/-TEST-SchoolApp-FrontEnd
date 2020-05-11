import {
    FETCH_STUDENTS,
    ADD_STUDENTS_PENDING,
    ADD_STUDENTS_SUCCESS,
    ADD_STUDENTS_ERROR,
    UPDATE_STUDENTS_PENDING,
    UPDATE_STUDENTS_SUCCESS,
    UPDATE_STUDENTS_ERROR,
    DELETE_STUDENTS_PENDING,
    DELETE_STUDENTS_SUCCESS,
    DELETE_STUDENTS_ERROR,
    SET_SELECTED_STUDENTS_ID
  } from '../actions/types'
  
  const initialState = {
    students: [],
    size: '',
    error: null,
    isLoading: false,
    message: undefined,
    adminActions: false,
    studentSelected: ''
  }
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case FETCH_STUDENTS:
        return {
          ...state,
          students: action.payload,
          adminActions: false
        }
  
      case ADD_STUDENTS_PENDING:
        return {
          ...state,
          isLoading: true
        }
  
      case ADD_STUDENTS_SUCCESS: {
        const newStudent = action.payload.student.data
        const students = [...state.items, newStudent]
        return {
          ...state,
          isLoading: false,
          students: students
        }
      }
  
      case ADD_STUDENTS_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.error,
          message: action.payload.message
        }
  
      case UPDATE_STUDENTS_PENDING:
        return {
          ...state,
          isLoading: true
        }
  
      case UPDATE_STUDENTS_SUCCESS: {
        console.log(action.payload)
        const newStudentUpdate = [...state.items]
        const studentToUpdate = newStudentUpdate.findIndex(
          ele => ele._id === action.payload._id
        )
  
        newStudentUpdate.splice(studentToUpdate, 1, action.payload.student.data)
        return {
          ...state,
          isLoading: false,
          students: newStudentUpdate
        }
      }
  
      case UPDATE_STUDENTS_ERROR:
        return {
          ...state,
          isLoading: false,
          message: action.payload.message
        }
  
      case SET_SELECTED_STUDENTS_ID: {
        return {
          ...state,
          studentSelected: action.payload
        }
      }
  
      case DELETE_STUDENTS_PENDING:
        return {
          ...state,
          isLoading: true
        }
  
      case DELETE_STUDENTS_SUCCESS:
        console.log(action.payload)
        const newStudent = [...state.students]
        const studentToDelete = newStudent.findIndex(
          ele => ele._id === action.payload._id
        )
  
        newStudent.splice(studentToDelete, 1)
        return {
          ...state,
          isLoading: false,
          students: newStudent
        }
  
      case DELETE_STUDENTS_ERROR:
        return {
          ...state,
          isLoading: false,
          message: action.payload.message
        }
  
      default:
        return state
    }
  }