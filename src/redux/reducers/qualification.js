import {
  FETCH_QUALIFICATION,
  ADD_QUALIFICATION_PENDING,
  ADD_QUALIFICATION_SUCCESS,
  ADD_QUALIFICATION_ERROR,
  DELETE_QUALIFICATION_PENDING,
  DELETE_QUALIFICATION_SUCCESS,
  DELETE_QUALIFICATION_ERROR,
  SET_SELECTED_QUALIFICATION_ID,
} from "../actions/types";

const initialState = {
  qualifications: [],
  size: "",
  error: null,
  isLoading: false,
  message: undefined,
  qualificationSelected: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_QUALIFICATION:
      return {
        ...state,
        qualifications: action.payload.qualifications,
      };

    case ADD_QUALIFICATION_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_QUALIFICATION_SUCCESS: {
      console.log(action.payload);
      const newQualification = action.payload.qualification;
      const qualifications = [...state.qualifications, newQualification];
      return {
        ...state,
        isLoading: false,
        qualifications: qualifications,
      };
    }

    case ADD_QUALIFICATION_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        message: action.payload.message,
      };

    case SET_SELECTED_QUALIFICATION_ID: {
      return {
        ...state,
        qualificationSelected: action.payload,
      };
    }

    case DELETE_QUALIFICATION_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_QUALIFICATION_SUCCESS:
      console.log(action.payload);
      const newQualification = [...state.qualifications];
      const qualificationToDelete = newQualification.findIndex(
        (ele) => ele._id === action.payload._id
      );

      //Separates the selected qualification from the rest
      newQualification.splice(qualificationToDelete, 1);
      return {
        ...state,
        isLoading: false,
        qualifications: newQualification,
      };

    case DELETE_QUALIFICATION_ERROR:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
      };

    default:
      return state;
  }
}
