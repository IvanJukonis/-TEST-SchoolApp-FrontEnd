import {
  FETCH_STUDENT,
  ADD_STUDENT_PENDING,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_ERROR,
  DELETE_STUDENT_PENDING,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_ERROR,
} from "../actions/types";

const initialState = {
  students: [],
  size: "",
  error: null,
  isLoading: false,
  message: undefined,
  studentSelected: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_STUDENT:
      return {
        ...state,
        students: action.payload.students
      };

    case ADD_STUDENT_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_STUDENT_SUCCESS: {
      const newStudent = action.payload.student;
      const students = [...state.students, newStudent];
      return {
        ...state,
        isLoading: false,
        students: students,
      };
    }

    case ADD_STUDENT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        message: action.payload.message,
      };

    case DELETE_STUDENT_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_STUDENT_SUCCESS:
      console.log(action.payload);
      const newStudent = [...state.students];
      const studentToDelete = newStudent.findIndex(
        (ele) => ele._id === action.payload._id
      );

      newStudent.splice(studentToDelete, 1);
      return {
        ...state,
        isLoading: false,
        students: newStudent,
      };

    case DELETE_STUDENT_ERROR:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
      };

    default:
      return state;
  }
}
