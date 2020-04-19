import * as React from 'react';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';

import '../../main.css';
import { updateSession } from '../../store/system/actions';
import { addMessage, deleteMessages, changeInput } from '../../store/chat/actions';

import ChatHistory from './AllMessages';
import ChatInterface from './ChatInterface';

import addSocketListeners from './socketHandlers';

const server = socketIOClient('http://localhost:3001/');

function Chat({ chat, system, updateSession, addMessage, deleteMessages, changeInput }) {
  console.log('Chat is run');

  React.useEffect(() => {
    addSocketListeners({ chat, system, updateSession, addMessage, deleteMessages, changeInput });
  }, [])

  const updateMessage = (event) => {
    console.log('Updating message, chat: ', chat, ' and event value: ', event.currentTarget.value);
    changeInput(event.currentTarget.value);
  };

  const logout = () => {
    server.emit('logout', system.userName);
  };

  const sendMessage = (message) => {
    console.log('Message: ', message)
    console.log('State.message: ', chat.input)
    server.emit('message', chat.input);
  };

  return (
    <div className="parent">
      <ChatHistory messages={chat.messages} />
      <ChatInterface
        userName={system.userName}
        input={chat.input}
        updateMessage={updateMessage}
        sendMessage={sendMessage}
      />
      <button type="submit" onClick={logout}>
        Logout
      </button>
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
