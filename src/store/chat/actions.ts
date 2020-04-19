export function addMessage(newMessage) {
  return {
    type: 'ADD_MESSAGE',
    payload: newMessage,
  };
}
export function deleteMessages() {
  return {
    type: 'DELETE_MESSAGES'
  };
}
export function changeInput(inputValue) {
  return {
    type: 'CHANGE_INPUT',
    payload: inputValue
  };
}

