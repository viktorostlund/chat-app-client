import { changeErrorMessage } from "./actions";

const initialState = {
  loggedIn: false,
  session: '',
  userName: '',
  errorMessage: ''
};

export function systemReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_SESSION': {
      return {
        ...state,
        ...action.payload,
      };
    }
    case 'CHANGE_USERNAME': {
      return {
        ...state,
        userName: action.payload,
      };
    }
    case 'CHECK_LOGIN': {
      return {
        ...state,
        loggedIn: true,
      };
    }
    case 'CHANGE_ERROR_MESSAGE': {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    default:
      return state;
  }
}
