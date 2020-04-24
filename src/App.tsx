import * as React from 'react';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';

import './main.css';

import * as systemActions from './store/system/actions';
import * as chatActions from './store/chat/actions';

import AllMessages from './components/AllMessages';
import ChatInterface from './components/ChatInterface';
import Header from './components/Header';
import LandingPage from './components/LandingPage';

import addSocketListeners from './components/AddSocketListeners';

const server = socketIOClient('http://localhost:3001/');

setInterval(() => {
  if (!server.connected) {
    server.connect();
  }
}, 1000);

function App({
  chat,
  system,
  changeErrorMessage,
  logout,
  login,
  deleteMessages,
  addMessage,
  changeInput,
  changeUsername,
}) {
  React.useEffect(() => {
    addSocketListeners({
      server,
      addMessage,
      deleteMessages,
      login,
      changeErrorMessage,
      logout,
    });
  }, [addMessage, deleteMessages, login, changeErrorMessage, logout]);

  const updateMessage = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    changeInput(event.currentTarget.value);
  };

  const updateUsername = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    changeUsername(event.currentTarget.value);
  };

  const sendLogin = (): void => {
    server.emit('login', system.userName);
  };

  const sendLogout = (): void => {
    server.emit('logout', system.userName);
  };

  const sendMessage = (): void => {
    server.emit('message', {
      status: 'created',
      userName: system.userName,
      message: chat.input,
      time: new Date().getTime(),
    });
    changeInput('');
  };

  return (
    <div>
      {system.loggedIn ? (
        <div className="parent">
          <Header sendLogout={sendLogout} userName={system.userName} />
          <AllMessages messages={chat.messages} userName={system.userName} />
          <ChatInterface
            input={chat.input}
            updateMessage={updateMessage}
            sendMessage={sendMessage}
          />
        </div>
      ) : (
        <div>
          <LandingPage server={server} sendLogin={sendLogin} updateUsername={updateUsername} />
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
  ...systemActions,
  ...chatActions,
})(App);
