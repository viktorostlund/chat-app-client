import socketIOClient from 'socket.io-client';

import { connect } from 'react-redux';

const server = socketIOClient('http://localhost:3001/');

const addSocketListeners = ({ chat, system, updateSession, addMessage, deleteMessages, changeInput }) => {
  
  server.on('message', (messageObj) => {
    console.log('Message obj', messageObj)
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

// function socketHandlers({ chat, system, updateSession, addMessage, deleteMessages, changeInput }) {
//   console.log('socketHandlers is run');

//   server.on('message', (message) => {
//     console.log('add message: ', message);
//     console.log('messages before: ', chat.messages)
//     addMessage({
//       ...chat.messages.push({
//         userName: system.userName,
//         message: message,
//         time: new Date().getTime()
//       })
//     });
//     changeInput({ ...chat, input: '' });
//     console.log('messages after', chat.messages)
//   });

//   server.on('users after logout', (users) => {
//     if (!users.includes(system.userName)) {
//       updateSession({...system, loggedIn: false});
//       deleteMessages();
//     }
//   });
// }

// const mapStateToProps = (state) => {
//   return {
//     system: state.system,
//     chat: state.chat,
//   };
// };

// export default socketHandlers;

// // export default connect(mapStateToProps, {
// //   addMessage,
// //   updateSession,
// //   deleteMessages,
// //   changeInput
// // })(Chat);

// // React.useEffect(() => {
// //   props.updateSession({
// //     loggedIn: true,
// //     session: 'my_session',
// //     userName: 'myName',
// //   });
// //   props.sendMessage({
// //     username: 'Chat Bot',
// //     message:
// //       'This is a very basic chat application written in typescript using react and redux. Feel free to explore the source code.',
// //     time: new Date().getTime(),
// //   });
// //   props.thunkSendMessage('This message was sent by a thunk!');
// // }, []);
