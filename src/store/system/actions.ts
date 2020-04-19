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
export function checkLogin(users) {
  return {
    type: 'CHECK_LOGIN',
    payload: users[users.length - 1],
  };
}
