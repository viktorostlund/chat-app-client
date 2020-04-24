const initialState = {
  messages: [],
  input: '',
};

export function chatReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case 'DELETE_MESSAGES':
      return {
        ...state,
        messages: [],
      };
    case 'CHANGE_INPUT':
      return {
        ...state,
        input: action.payload,
      };
    default:
      return state;
  }
}
