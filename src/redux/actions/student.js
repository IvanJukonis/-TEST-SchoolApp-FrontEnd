import {
  FETCH_STUDENT,
  ADD_STUDENT_PENDING,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_ERROR,
  UPDATE_STUDENT_PENDING,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_ERROR,
  DELETE_STUDENT_PENDING,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_ERROR
} from "./types"

import store from "../store/store"

//#region GET STUDENTS
export const fetchStudents = () => dispatch => {
  fetch("http://localhost:5000/students")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      return dispatch({
        type: FETCH_STUDENT,
        payload: data
      })
    }
  )
}
//#endregion

//#region POST STUDENT
export const postStudent = student => {
  return dispatch => {
    dispatch({
      type: ADD_STUDENT_PENDING
    })
    //CombineTools allow us to get the users
    const { token } = store.getState().users
    const request = {
      timeout: 25000,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `BEARER ${token}`
      },
      body: JSON.stringify(student)
    }
    return fetch(`http://localhost:5000/students`, request)
      .then(response => response.json())
      .then(data => {
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }
        return dispatch({
          type: ADD_STUDENT_SUCCESS,
          payload: {
            student: data.createdStudent
          }
        })
      })

      .catch(error => {
        return dispatch({
          type: ADD_STUDENT_ERROR,
          payload: error
        })
      }
    )
  }
}
//#endregion

//#region UPDATE STUDENTS
export const updateStudent = student => {
  console.log(student)
  return dispatch => {
    dispatch({
      type: UPDATE_STUDENT_PENDING
    })
    const options = {
      timeout: 25000,
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ student })
    }
    return fetch(`http://localhost:5000/students/${student._id}`, options)
      .then(response => response.json())
      .then(data => {
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }

        return dispatch({
          type: UPDATE_STUDENT_SUCCESS,
          payload: data
        })
      })

      .catch(error => {
        return dispatch({
          type: UPDATE_STUDENT_ERROR,
          payload: error
        })
      }
    )
  }
}
//#endregion

//#region DELETE STUDENT
export const deleteStudent = code => {
  return dispatch => {
    dispatch({
      type: DELETE_STUDENT_PENDING
    })
    const options = {
      timeout: 25000,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }
    return fetch(`http://localhost:5000/students/${code}`, options)
      .then(response => response.json())
      .then(data => {
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }
        return dispatch({
          type: DELETE_STUDENT_SUCCESS,
          payload: data
        })
      })

      .catch(error => {
        return dispatch({
          type: DELETE_STUDENT_ERROR,
          payload: error
        })
      }
    )
  }
}
//#endregion
