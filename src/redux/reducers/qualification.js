import {
  FETCH_QUALIFICATION,
  ADD_QUALIFICATION_PENDING,
  ADD_QUALIFICATION_SUCCESS,
  ADD_QUALIFICATION_ERROR,
  UPDATE_QUALIFICATION_PENDING,
  UPDATE_QUALIFICATION_SUCCESS,
  UPDATE_QUALIFICATION_ERROR,
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
  adminActions: false,
  qualificationSelected: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_QUALIFICATION:
      return {
        ...state,
        qualifications: action.payload.qualifications,
        adminActions: false,
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

    case UPDATE_QUALIFICATION_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case UPDATE_QUALIFICATION_SUCCESS: {
      console.log(action.payload);
      const newQualificationUpdate = [...state.items];
      const qualificationToUpdate = newQualificationUpdate.findIndex(
        (ele) => ele._id === action.payload._id
      );

      newQualificationUpdate.splice(
        qualificationToUpdate,
        1,
        action.payload.qualification.data
      );
      return {
        ...state,
        isLoading: false,
        qualifications: newQualificationUpdate,
      };
    }

    case UPDATE_QUALIFICATION_ERROR:
      return {
        ...state,
        isLoading: false,
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
