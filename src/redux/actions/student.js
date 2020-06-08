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
  DELETE_STUDENT_ERROR,
  SET_SELECTED_STUDENT_ID
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

//#region POST STUDENT
export const postStudent = student => {
  console.log("entraste")
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
      .then(res => res.json())
      .then(data => {
        console.log("UPDATE STUDENT", data)
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

//SET STUDENT
export const setStudentOnForm = _id => {
  return dispatch => {
    dispatch({
      type: SET_SELECTED_STUDENT_ID,
      payload: _id
    })
  }
}

//DELETE THE STUDENT
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
      .then(res => res.json())
      .then(data => {
        console.log("DELETE STUDENT", data)
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
      })
  }
}
