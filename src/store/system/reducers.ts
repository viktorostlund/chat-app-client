const initialState = {
  loggedIn: false,
  session: '',
  userName: '',
};

export function systemReducer(state = initialState, action) {
  // console.log('systemReducer: ', state, ' action type: ', action.type);
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
