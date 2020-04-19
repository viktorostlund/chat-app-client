// import socketIOClient from 'socket.io-client';

// import { connect } from 'react-redux';

// const server = socketIOClient('http://localhost:3001/');

const addSocketListeners = ({ server, chat, system, updateSession, addMessage, deleteMessages, changeInput }) => {
  
  server.on('message', (messageObj) => {
    addMessage(messageObj);
    changeInput('');
  });

  server.on('users after logout', (users) => {
    if (!users.includes(system.userName)) {
      updateSession({...system, loggedIn: false});
      deleteMessages();
    }
  });
};

export default addSocketListeners;
