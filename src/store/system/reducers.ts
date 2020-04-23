const initialState = {
  loggedIn: false,
  userName: '',
  errorMessage: '',
};

export function systemReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        loggedIn: true,
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        userName: '',
        loggedIn: false,
      };
    }
    case 'CHANGE_USERNAME': {
      return {
        ...state,
        userName: action.payload,
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
