import * as React from 'react';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';

import '../../main.css';
import { updateSession } from '../../store/system/actions';
import { sendMessage, deleteMessages } from '../../store/chat/actions';

import ChatHistory from './AllMessages';
import ChatInterface from './ChatInterface';

function Chat({ chat, system, updateSession, sendMessage, deleteMessages }) {
  const [state, setState] = React.useState({ message: '' });

  const socket = socketIOClient('http://localhost:3001/');

  const updateMessage = (event) => {
    setState({ message: event.currentTarget.value });
  };

  const logout = () => {
    socket.emit('logout', 'Viktor');
  };

  socket.on('users to clients after logout', (msg) => {
    updateSession({
        loggedIn: false,
        session: '',
        userName: '',
    });
    deleteMessages();
  });

  const applySendMessage = (message) => {
    sendMessage({
      username: system.userName,
      message: state.message,
      time: new Date().getTime(),
    });
    setState({ message: '' });
  };

  return (
    <div className="parent">
      <ChatHistory messages={chat.messages} />
      <ChatInterface
        userName={system.userName}
        message={state.message}
        updateMessage={updateMessage}
        sendMessage={applySendMessage}
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
  sendMessage,
  updateSession,
  deleteMessages
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
