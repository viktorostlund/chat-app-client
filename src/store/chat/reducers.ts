const initialState = {
  messages: [],
  input: '',
};

export function chatReducer(state = initialState, action) {
  const obj = { ...state, messages: [...state.messages, action.payload] };
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case 'CHANGE_INPUT':
      return {
        ...state,
        input: action.payload,
      };
    case 'DELETE_MESSAGES':
      return {
        ...state,
        messages: [],
      };
    default:
      return state;
  }
}
