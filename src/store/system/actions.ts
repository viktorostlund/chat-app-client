export function changeUsername(inputValue: string) {
  return {
    type: 'CHANGE_USERNAME',
    payload: inputValue,
  };
}
export function login() {
  return {
    type: 'LOGIN',
  };
}
export function changeErrorMessage(message: string) {
  return {
    type: 'CHANGE_ERROR_MESSAGE',
    payload: message,
  };
}
export function logout() {
  return {
    type: 'LOGOUT',
  };
}
