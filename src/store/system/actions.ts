export function updateSession(newSession) {
  return {
    type: 'UPDATE_SESSION',
    payload: newSession,
  };
}
export function changeUsername(inputValue) {
  return {
    type: 'CHANGE_USERNAME',
    payload: inputValue,
  };
}
export function login() {
  return {
    type: 'LOGIN'
  };
}
export function changeErrorMessage(message) {
  return {
    type: 'CHANGE_ERROR_MESSAGE',
    payload: message,
  };
}
export function logout() {
  return {
    type: 'LOGOUT'
  };
}
