export function updateSession(newSession) {
  console.log(newSession);
  return {
    type: 'UPDATE_SESSION',
    payload: newSession,
  };
}
