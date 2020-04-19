import * as React from 'react';
import { connect } from 'react-redux';

import '../main.css';
import { updateSession } from '../store/system/actions';
import { addMessage, deleteMessages, changeInput } from '../store/chat/actions';

import ChatHistory from './AllMessages';
import ChatInterface from './ChatInterface';
import Header from './Header';
import LandingPage from './LandingPage';

import addSocketListeners from './socketHandlers';

function Chat({ server, chat, system, updateSession, addMessage, deleteMessages, changeInput }) {
  React.useEffect(() => {
    addSocketListeners({ server, chat, system, updateSession, addMessage, deleteMessages, changeInput });
  }, [])

  const updateMessage = (event) => {
    changeInput(event.currentTarget.value);
  };

  const logout = () => {
    server.emit('logout', system.userName);
  };

  const sendMessage = (message) => {
    server.emit('message', {
      userName: system.userName,
      message: chat.input,
      time: new Date().getTime()
    });
  };

  return (
    <div>
      { system.loggedIn ?
      <div className="parent">
      <Header logout={logout}/>
      <ChatHistory messages={chat.messages} />
      <ChatInterface
        userName={system.userName}
        input={chat.input}
        updateMessage={updateMessage}
        sendMessage={sendMessage}
      />
      </div>
      : 
      <div><LandingPage /></div> }
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
  changeInput
})(Chat);

// React.useEffect(() => {
//   props.updateSession({
//     loggedIn: true,
//     session: 'my_session',
//     userName: 'myName',
//   });
//   props.sendMessage({
//     username: 'Chat Bot',
//     message:
//       'This is a very basic chat application written in typescript using react and redux. Feel free to explore the source code.',
//     time: new Date().getTime(),
//   });
//   props.thunkSendMessage('This message was sent by a thunk!');
// }, []);
