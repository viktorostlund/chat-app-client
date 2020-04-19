const initialState = {
  messages: [],
  input: ''
};

export function chatReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state, 
        ...action.payload
      };
    case 'CHANGE_INPUT':
      return {
        ...state, 
        ...action.payload
      };
    case 'DELETE_MESSAGES':
      return {
        ...state, 
        messages: []
      };
    default:
      return state;
  }
}
