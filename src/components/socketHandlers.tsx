const addSocketListeners = ({
  server,
  addMessage,
  deleteMessages,
  login,
  changeErrorMessage,
  logout
}) => {

  if (!server.connected) {
    changeErrorMessage('No connection with server');
  }

  server.on('message', (messageObj) => {
    addMessage(messageObj);
  });

  server.on('connect', function() {
    changeErrorMessage('');
  })

  server.on('disconnect', function() {
    changeErrorMessage('No connection with server');
  })
  
  server.on('error', function() {
    changeErrorMessage('Server error');
  })

  server.on('login', (response) => {
    if (response === 'empty') {
      changeErrorMessage('Write something at least!');
    } else if (response === 'invalid') {
      changeErrorMessage('Username cannot be longer than 15 characters');
    } else if (response === 'taken') {
      changeErrorMessage('Already taken!');
    } else if ('success') {
      login();
      changeErrorMessage('');
    }
  });

  server.on('logout', (response) => {
    if (response === 'success') {
      logout();
      deleteMessages();
    } else if (response === 'inactivity') {
      logout();
      deleteMessages();
      changeErrorMessage('Left chat due to inactivity');
    } else if (response === 'error') {
      logout();
      deleteMessages();
      changeErrorMessage('Server error');
    }
  });

};

export default addSocketListeners;
