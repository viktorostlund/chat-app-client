// import * as React from 'react';

const addSocketListeners = ({
  server,
  addMessage,
  deleteMessages,
  login,
  changeErrorMessage,
  logout
}) => {

  if (!server.connected) {
    changeErrorMessage('No connection to server');
  }

  server.on('message', (response) => {
    if (response && response !== "invalid") {
      addMessage(response);
    } else {
      console.log('invalid!')
    }
  });

  server.on('connect', function() {
    changeErrorMessage('');
  })

  server.on('disconnect', function() {
    server.disconnect();
    logout();
    deleteMessages();
    changeErrorMessage('Server error');
  })
  
  server.on('error', function() {
    server.disconnect();
    deleteMessages();
    changeErrorMessage('Server error');
  })

  server.on('login', (response) => {
    if (response === 'empty') {
      changeErrorMessage('Empty name is not valid');
    } else if (response === 'invalid') {
      changeErrorMessage('Name must be less than 10 characters');
    } else if (response === 'taken') {
      changeErrorMessage('Name is already in use');
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
      server.disconnect();
      deleteMessages();
      changeErrorMessage('Server error');
    }
  });

};

export default addSocketListeners;
