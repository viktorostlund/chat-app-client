import { ChatState, SEND_MESSAGE, ChatActionTypes } from './types';

const initialState: ChatState = {
  messages: [],
};

export function chatReducer(
  state = initialState,
  action: ChatActionTypes
): ChatState {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
}
