import { Message, SEND_MESSAGE } from './types';

export function sendMessage(newMessage: Message) {
  return {
    type: SEND_MESSAGE,
    payload: newMessage,
  };
}
