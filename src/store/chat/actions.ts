export function sendMessage(newMessage) {
  return {
    type: 'SEND_MESSAGE',
    payload: newMessage,
  };
}
export function deleteMessages() {
  return {
    type: 'DELETE_MESSAGES'
  };
}
