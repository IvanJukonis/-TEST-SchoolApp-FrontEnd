import {
  ADD_USER_PENDING,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  FETCH_USERS,
  AUTHENTICATION,
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  USER_LOGOUT
} from "../actions/types";

const initialState = {
  authentication: false,
  users: [],
  error: null,
  isLoading: false,
  message: undefined,
  logged: false,
  token: "",
  failedLogin: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case  AUTHENTICATION:
      return {
        ...state,
        authentication: action.payload.authentication,
        token: action.payload.token
      };
    case USER_LOGOUT:
      return {
        state: initialState
      };
    case LOGIN_USER_PENDING:
      return {
        //CAEMOS ACA DESDE EL ACTION EN DONDE NOS DIJIERON QUE SE ESTA LOGEANDO ALGUIEN
        //EL REDUCER HACE UNA COPIA DEL STORE Y LE DICE QUE AGUANTE PORQUE VAN A HACER MAS COSAS --> ACTION
        ...state,
        isLoading: true,
        failedLogin: false
      };
      //PREGUNTAR PARA QUE ESTA EL PENDING

      //CAEMOS ACA DESDE EL ACTION QUE 
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        //PAYLOAD ES LA RES QUE VINO DEL BACK Y ESA RES VENIA CON UN TOKEN ENTONCES GUARDAMOS ESE TOKEN EN LA VARIABLE TOKEN
        token: action.payload.token,
        authentication: true
      };

    case LOGIN_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
        failedLogin: true
      };

    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      };
    case ADD_USER_PENDING:
      return {
        ...state,
        isLoading: true
      };

    case ADD_USER_SUCCESS: {
      const newUser = action.payload.user;
      const user = [...state.users, newUser];
      return {
        ...state,
        isLoading: false,
        users: user
      };
    }
    case ADD_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        message: action.payload.message
      };
    default:
      return state;
  }
}