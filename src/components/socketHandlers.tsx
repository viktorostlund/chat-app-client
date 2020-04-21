const addSocketListeners = ({
  server,
  updateSession,
  addMessage,
  deleteMessages,
  changeInput,
  login,
  changeErrorMessage,
  logout
}) => {

  server.on('message', (messageObj) => {
    addMessage(messageObj);
    changeInput('');
  });

  server.on('login', (response) => {
    if (response === 'empty') {
      changeErrorMessage('Write something at least!');
    } else if (response === 'taken') {
      changeErrorMessage('Already taken!');
    } else {
      login();
      changeErrorMessage('');
    }
  });

  server.on('logout', (response) => {
    if (response === 'success') {
      logout();
      deleteMessages();
    }
  });

};

export default addSocketListeners;
