import {
    ADD_USER_PENDING,
    ADD_USER_SUCCESS,
    ADD_USER_ERROR,
    FETCH_USERS,
    IS_AUTH,
    LOGIN_USER_PENDING,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    USER_LOGOUT
  } from './types';
  
  export const logIn = data => {
    return dispatch => {
      //ACA LE DECIMOS AL REDUCER QUE LE DIGA AL STORE QUE VAMOS A LOGAR --> REDUCER
      dispatch({
        type: LOGIN_USER_PENDING
      });
      //CREAMOS UNA CONSTANTE OPTIONS, LA CUAL VA A TENER TODA LA INFO NECESARIA PARA PEGARLE A LA BASE DE DATOS
      const options = {
        timeout: 25000,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        //GUARDAMOS LA CONTRASEÑA Y EL NOMBRE QUE PUSIERON EN EL FRONT ADENTRO DEL BODY DE OPTIONS
        body: JSON.stringify({
          name: document.getElementById('inputName').value,
          password: document.getElementById('inputPassword').value
        })
      };
      
      //ACA LE PEGAMOS AL BACK CON UN FETCH
      //LE PASAMOS OPTIONS CON EL USUARIO Y LA PASS
      return fetch('http://localhost:5000/user/login', options)
        .then(res => res.json())
        .then(res => {
          //EN CASO QUE EL MENSAJE DE LA RESPNOSE SEA VERDADERO
          //LE DECIMOS AL REDUCER QUE HAGA UN DISPATCH SUCCES
          //Y TAMBIEN LE MANDAMOS DE PAYLOAD LA RESPONSE --> REDUCER
          if (res.msg !== 'Auth failed') {
            console.log(res);
  
            return dispatch({
              type: LOGIN_USER_SUCCESS,
              payload: res
            });
          } else {
            return dispatch({
              type: LOGIN_USER_ERROR,
              payload: res.error
            });
          }
        });
    };
  };

  
  export const isAuth = isAuth => {
    return {
      type: IS_AUTH,
      payload: isAuth
    };
  };
  
  //GET USERS
  export const fetchUser = () => dispatch => {
    fetch('http://localhost:5000/api/user/')
      .then(res => res.json())
      .then(data => {
        return dispatch({ type: FETCH_USERS, payload: data });
      });
  };
  
  //LOGOUT
  export const logOut = dispatch => {
    return {
      type: USER_LOGOUT
    };
  };
  
  //POST USERS
  export const postUser = user => {
    return dispatch => {
      dispatch({
        type: ADD_USER_PENDING
      });
  
      const options = {
        timeout: 25000,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      };
      console.log('options', options);
      return fetch(`http://localhost:5000/api/user`, options)
        .then(res => res.json())
        .then(data => {
          console.log('POST USER', data);
          if (!Object.entries(data).length) {
            return Promise.reject(data);
          }
  
          return dispatch({
            type: ADD_USER_SUCCESS,
            payload: {
              user: data
            }
          });
        })
        .catch(error => {
          return dispatch({
            type: ADD_USER_ERROR,
            payload: error
          });
        });
    };
  };