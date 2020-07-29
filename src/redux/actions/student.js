import {
  FETCH_STUDENT,
  ADD_STUDENT_PENDING,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_ERROR,
  DELETE_STUDENT_PENDING,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_ERROR,
} from "./types";

import store from "../store/store";

//#region GET STUDENTS
export const fetchStudents = () => (dispatch) => {
  fetch("http://localhost:5000/api/students")
    .then((response) => response.json())
    .then((response) => {
      return dispatch({
        type: FETCH_STUDENT,
        payload: response,
      });
    });
};
//#endregion
//#region POST STUDENT
export const postStudent = (student) => {
  return (dispatch) => {
    dispatch({
      type: ADD_STUDENT_PENDING,
    });
    //CombineTools allow us to get the users
    const { token } = store.getState().users;
    const request = {
      timeout: 25000,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `BEARER ${token}`,
      },
      body: JSON.stringify(student),
    };
    return fetch(`http://localhost:5000/api/students`, request)
      .then((response) => response.json())
      .then((response) => {
        if (!Object.entries(response).length) {
          return Promise.reject(response);
        }
        return dispatch({
          type: ADD_STUDENT_SUCCESS,
          payload: {
            student: response.createdStudent,
          },
        });
      })
      .catch((error) => {
        return dispatch({
          type: ADD_STUDENT_ERROR,
          payload: error,
        });
      });
  };
};
//#endregion

//#region DELETE STUDENT
export const deleteStudent = (code) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_STUDENT_PENDING,
    });
    const options = {
      timeout: 25000,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    return fetch(`http://localhost:5000/api/students/${code}`, options)
      .then((response) => response.json())
      .then((response) => {
        if (!Object.entries(response).length) {
          return Promise.reject(response);
        }
        if (response.message === "error") {
          return dispatch({
            type: DELETE_STUDENT_ERROR,
          });
        } else {
          return dispatch({
            type: DELETE_STUDENT_SUCCESS,
            payload: response,
          });
        }
      })
      .catch((error) => {
        return dispatch({
          type: DELETE_STUDENT_ERROR,
          payload: error,
        });
      });
  };
};
//#endregion
