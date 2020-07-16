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
  SET_SELECTED_STUDENT_ID,
} from "../actions/types";

const initialState = {
  students: [],
  size: "",
  error: null,
  isLoading: false,
  message: undefined,
  adminActions: false,
  studentSelected: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_STUDENT:
      return {
        ...state,
        students: action.payload.students,
        adminActions: false,
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

    case UPDATE_STUDENT_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case UPDATE_STUDENT_SUCCESS: {
      console.log(action.payload);
      const newStudentUpdate = [...state.items];
      const studentToUpdate = newStudentUpdate.findIndex(
        (ele) => ele._id === action.payload._id
      );

      newStudentUpdate.splice(studentToUpdate, 1, action.payload.student.data);
      return {
        ...state,
        isLoading: false,
        students: newStudentUpdate,
      };
    }

    case UPDATE_STUDENT_ERROR:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
      };

    case SET_SELECTED_STUDENT_ID: {
      return {
        ...state,
        studentSelected: action.payload,
      };
    }

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
