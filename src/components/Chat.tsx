import * as React from 'react';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';

import '../main.css';

import { updateSession, changeUsername, checkLogin, changeErrorMessage } from '../store/system/actions';
import { addMessage, deleteMessages, changeInput } from '../store/chat/actions';

import ChatHistory from './AllMessages';
import ChatInterface from './ChatInterface';
import Header from './Header';
import LandingPage from './LandingPage';

import addSocketListeners from './socketHandlers';

const server = socketIOClient('http://localhost:3001/');

function Chat({ chat, system, updateSession, addMessage, deleteMessages, changeInput, changeUsername, checkLogin, changeErrorMessage }) {
  React.useEffect(() => {
    addSocketListeners({
      server,
      updateSession,
      addMessage,
      deleteMessages,
      changeInput,
      checkLogin,
      changeErrorMessage
    });
  }, []);

  const updateMessage = (event) => {
    changeInput(event.currentTarget.value);
  };

  const updateUsername = (event) => {
    changeUsername(event.currentTarget.value);
    console.log(system)
  };

  const login = () => {
    server.emit('login', system.userName);
    // updateSession({
    //   loggedIn: true,
    //   session: '',
    //   userName: 'Viktor',
    // });
  }

  const logout = () => {
    server.emit('logout', system.userName);
  };

  const sendMessage = (message) => {
    server.emit('message', {
      userName: system.userName,
      message: chat.input,
      time: new Date().getTime(),
    });
  };

  return (
    <div>
      {system.loggedIn ? (
        <div className="parent">
          <Header logout={logout} />
          <ChatHistory messages={chat.messages} />
          <ChatInterface
            userName={system.userName}
            input={chat.input}
            updateMessage={updateMessage}
            sendMessage={sendMessage}
          />
        </div>
      ) : (
        <div>
          <LandingPage 
            login={login}
            updateUsername={updateUsername}
          />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    system: state.system,
    chat: state.chat,
  };
};

export default connect(mapStateToProps, {
  addMessage,
  updateSession,
  deleteMessages,
  changeInput,
  changeUsername,
  checkLogin, 
  changeErrorMessage
})(Chat);
