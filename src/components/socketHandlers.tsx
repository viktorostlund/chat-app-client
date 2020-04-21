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
    } else if ('success') {
      login();
      changeErrorMessage('');
    } else {
      changeErrorMessage('Server error');
    }
  });

  server.on('logout', (response) => {
    if (response === 'success') {
      logout();
      deleteMessages();
    } else if (response === 'error') {
      logout();
      deleteMessages();
      changeErrorMessage('Server error');
    }
  });

};

export default addSocketListeners;
