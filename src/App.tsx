import * as React from 'react';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';

import './main.css';

import { updateSession, changeUsername, login, changeErrorMessage, logout } from './store/system/actions';
import { addMessage, deleteMessages, changeInput } from './store/chat/actions';

import AllMessages from './components/AllMessages';
import ChatInterface from './components/ChatInterface';
import Header from './components/Header';
import LandingPage from './components/LandingPage';

import addSocketListeners from './components/socketHandlers';

const server = socketIOClient('http://localhost:3001/');

function App({ chat, system, updateSession, addMessage, deleteMessages, changeInput, changeUsername, login, changeErrorMessage, logout }) {
  React.useEffect(() => {
    addSocketListeners({
      server,
      updateSession,
      addMessage,
      deleteMessages,
      changeInput,
      login,
      changeErrorMessage,
      logout
    });
  }, []);

  const updateMessage = (event) => {
    changeInput(event.currentTarget.value);
  };

  const updateUsername = (event) => {
    changeUsername(event.currentTarget.value);
  };

  const sendLogin = () => {
    server.emit('login', system.userName);
    // updateSession({
    //   loggedIn: true,
    //   session: '',
    //   userName: 'Viktor',
    // });
  }

  const sendLogout = () => {
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
          <Header 
            sendLogout={sendLogout}
            userName={system.userName}
          />
          <AllMessages messages={chat.messages} />
          <ChatInterface
            input={chat.input}
            updateMessage={updateMessage}
            sendMessage={sendMessage}
          />
        </div>
      ) : (
        <div>
          <LandingPage
            server={server}
            sendLogin={sendLogin}
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
  login, 
  changeErrorMessage,
  logout
})(App);
