const addSocketListeners = ({
  server,
  chat,
  system,
  updateSession,
  addMessage,
  deleteMessages,
  changeInput,
  checkLogin
}) => {
  server.on('message', (messageObj) => {
    addMessage(messageObj);
    changeInput('');
  });

  server.on('users after logout', (users) => {
    if (!users.includes(system.userName)) {
      updateSession({ ...system, loggedIn: false });
      deleteMessages();
    }
  });

  server.on('users after login', (users) => {
    checkLogin(users);
  });
};

export default addSocketListeners;
