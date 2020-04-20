const addSocketListeners = ({
  server,
  updateSession,
  addMessage,
  deleteMessages,
  changeInput,
  checkLogin,
  changeErrorMessage
}) => {
  server.on('message', (messageObj) => {
    addMessage(messageObj);
    changeInput('');
  });

  // server.on('users after logout', (users) => {
  //   if (!users.includes(system.userName)) {
  //     updateSession({ ...system, loggedIn: false });
  //     deleteMessages();
  //   }
  // });

  server.on('users after login', (response) => {
    if (response === 'empty') {
      changeErrorMessage('Write something at least!');
    } else if (response === 'taken') {
      changeErrorMessage('Already taken!');
    } else {
      checkLogin();
    }
  });
};

export default addSocketListeners;
