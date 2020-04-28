export interface Message {
  userName: string;
  time: number;
  message: string;
  id: number;
  status: string;
  sendToSelf: false;
}

const addSocketListeners = ({
  server,
  addMessage,
  deleteMessages,
  login,
  changeErrorMessage,
  logout,
}) => {
  if (!server.connected) {
    changeErrorMessage('Server error');
  }

  server.on('message', (response: Message) => {
    if (response && response.status && response.status !== 'invalid') {
      addMessage(response);
    }
  });

  server.on('connect', () => {
    changeErrorMessage('');
  });

  server.on('disconnect', () => {
    server.disconnect();
    logout();
    deleteMessages();
    changeErrorMessage('Server error');
  });

  server.on('error', () => {
    server.disconnect();
    deleteMessages();
    changeErrorMessage('Server error');
  });

  server.on('login', (response: string) => {
    if (response === 'empty') {
      changeErrorMessage('Empty name is not valid');
    } else if (response === 'invalid') {
      changeErrorMessage('Name must be less than 10 characters');
    } else if (response === 'taken') {
      changeErrorMessage('Name is already in use');
    } else if (response === 'success') {
      login();
      changeErrorMessage('');
    }
  });

  server.on('logout', (response: string) => {
    if (response === 'success') {
      logout();
      deleteMessages();
    } else if (response === 'inactivity') {
      logout();
      deleteMessages();
      changeErrorMessage('Left chat due to inactivity');
    } else if (response === 'error') {
      server.disconnect();
      deleteMessages();
      changeErrorMessage('Server error');
    }
  });
};

export default addSocketListeners;
