import {
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  FETCH_USERS,
  ADD_USER_PENDING,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  USER_LOGOUT,
  AUTHENTICATION,
} from "./types";

//#region POST USER
export const postUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: ADD_USER_PENDING,
    });
    const request = {
      timeout: 25000,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    return fetch("https://stormy-brook-34938.herokuapp.com/api/user/signup", request)
      .then((response) => response.json())
      .then((data) => {
        console.log("POST USER", data);
        if (!Object.entries(data).length) {
          return Promise.reject(data);
        }
        return dispatch({
          type: ADD_USER_SUCCESS,
          payload: {
            user: data,
          },
        });
      })
      .catch((error) => {
        return dispatch({
          type: ADD_USER_ERROR,
          payload: error,
        });
      });
  };
};
//#endregion
//#region GET USER
export const fetchUser = () => (dispatch) => {
  fetch("https://stormy-brook-34938.herokuapp.com/api/user/")
    .then((response) => response.json())
    .then((data) => {
      return dispatch({
        type: FETCH_USERS,
        payload: data,
      });
    });
};
//#endregion
//#region LOGIN
export const logIn = (data) => {
  return (dispatch) => {
    //Dispatch action
    dispatch({
      type: LOGIN_USER_PENDING,
    });
    const request = {
      timeout: 25000,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: document.getElementById("emailLogin").value,
        password: document.getElementById("passwordLogin").value,
      }),
    };
    //BackEnd Fetch
    return fetch("https://stormy-brook-34938.herokuapp.com/api/user/login", request)
      .then((response) => response.json())
      .then((response) => {
        //In case of success on dispatch, move to reducer
        if (response.msg !== "Authentication Failed") {
          return dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: response,
          });
        } else {
          return dispatch({
            type: LOGIN_USER_ERROR,
            payload: response.error,
          });
        }
      });
  };
};
//#endregion
//#region LOGOUT
export const logOut = (dispatch) => {
  return {
    type: USER_LOGOUT,
  };
};
//#endregion
//#region AUTHENTICATION
export const Authentication = (authentication) => {
  return {
    type: AUTHENTICATION,
    payload: authentication,
  };
};
//#endregion
