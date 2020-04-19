const initialState = {
  loggedIn: false,
  session: '',
  userName: '',
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
      console.log(state.userName, action.payload)
      if (action.payload === state.userName) {
        return {
          ...state,
          loggedIn: true,
        };
      }
    }
    default:
      return state;
  }
}
