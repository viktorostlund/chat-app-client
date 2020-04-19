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
    default:
      return state;
  }
}
