export function updateSession(newSession) {
  return {
    type: 'UPDATE_SESSION',
    payload: newSession,
  };
}
