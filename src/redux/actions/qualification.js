import {
  FETCH_QUALIFICATION,
  ADD_QUALIFICATION_PENDING,
  ADD_QUALIFICATION_SUCCESS,
  ADD_QUALIFICATION_ERROR,
  DELETE_QUALIFICATION_PENDING,
  DELETE_QUALIFICATION_SUCCESS,
  DELETE_QUALIFICATION_ERROR,
} from "./types";

import store from "../store/store";

//#region GET QUALIFICATIONS
export const fetchQualifications = () => (dispatch) => {
  fetch("http://localhost:5000/api/qualifications")
    .then((response) => response.json())
    .then((response) => {
      return dispatch({
        type: FETCH_QUALIFICATION,
        payload: response,
      });
    });
};
//#endregion
//#region POST QUALIFICATION
export const postQualification = (qualification) => {
  return (dispatch) => {
    dispatch({
      type: ADD_QUALIFICATION_PENDING,
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
      body: JSON.stringify(qualification),
    };
    return fetch(`http://localhost:5000/api/qualifications`, request)
      .then((response) => response.json())
      .then((response) => {
        if (!Object.entries(response).length) {
          return Promise.reject(response);
        }
        return dispatch({
          type: ADD_QUALIFICATION_SUCCESS,
          payload: {
            qualification: response.createdQualification,
          },
        });
      })
      .catch((error) => {
        return dispatch({
          type: ADD_QUALIFICATION_ERROR,
          payload: error,
        });
      });
  };
};
//#endregion
//#region UPDATE QUALIFICATIONS
export const updateQualification = (qualification) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_QUALIFICATION_PENDING,
    });
    const options = {
      timeout: 25000,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ qualification }),
    };
    return fetch(
      `http://localhost:5000/api/qualifications/${qualification._id}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        if (!Object.entries(response).length) {
          return Promise.reject(response);
        }

        return dispatch({
          type: UPDATE_QUALIFICATION_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        return dispatch({
          type: UPDATE_QUALIFICATION_ERROR,
          payload: error,
        });
      });
  };
};
//#endregion
//#region DELETE QUALIFICATION
export const deleteQualification = (code) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_QUALIFICATION_PENDING,
    });
    const options = {
      timeout: 25000,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    return fetch(`http://localhost:5000/api/qualifications/${code}`, options)
      .then((response) => response.json())
      .then((response) => {
        if (!Object.entries(response).length) {
          return Promise.reject(response);
        }
        return dispatch({
          type: DELETE_QUALIFICATION_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        return dispatch({
          type: DELETE_QUALIFICATION_ERROR,
          payload: error,
        });
      });
  };
};
//#endregion
