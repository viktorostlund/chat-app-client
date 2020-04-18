const initialState = {
  messages: [],
};

export function chatReducer(state = initialState, action) {
  console.log('Chatreducer: ', state, ' action type: ', action.type);
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        messages: [...state.messages, action.payload],
      };
    case 'DELETE_MESSAGES':
      return initialState;
    default:
      return state;
  }
}
