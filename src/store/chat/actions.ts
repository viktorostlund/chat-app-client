export function addMessage(message: object) {
  return {
    type: 'ADD_MESSAGE',
    payload: message,
  };
}
export function deleteMessages() {
  return {
    type: 'DELETE_MESSAGES',
  };
}
export function changeInput(inputValue: string) {
  return {
    type: 'CHANGE_INPUT',
    payload: inputValue,
  };
}
