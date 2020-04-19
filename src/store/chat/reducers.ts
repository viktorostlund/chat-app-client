const initialState = {
  messages: [],
  input: ''
};

export function chatReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      console.log('add message action payload: ', action.payload);
      return {
        ...state, 
        ...action.payload
      };
    case 'CHANGE_INPUT':
      console.log('change input action payload: ', action.payload.input);
      return {...state, input: action.payload};
    case 'DELETE_MESSAGES':
      return {
        ...state, 
        messages: []
      };
    default:
      return state;
  }
}
