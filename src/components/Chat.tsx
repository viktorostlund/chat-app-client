import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';

import '../main.css';

import { SystemState } from '../store/system/types';
import { updateSession } from '../store/system/actions';

import { ChatState } from '../store/chat/types';
import { sendMessage } from '../store/chat/actions';

import ChatHistory from './chat/AllMessages';
import ChatInterface from './chat/ChatInterface';

import { thunkSendMessage } from '../thunks';

interface AppProps {
  sendMessage: typeof sendMessage;
  updateSession: typeof updateSession;
  chat: ChatState;
  system: SystemState;
  thunkSendMessage: any;
}

function Chat(props: AppProps) {
  const [state, setState] = React.useState({ message: '' });

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

  const updateMessage = (event: React.SyntheticEvent<{ value: string }>) => {
    setState({ message: event.currentTarget.value });
  };

  const applySendMessage = (message: string) => {
    props.sendMessage({
      username: props.system.userName,
      message,
      time: new Date().getTime(),
    });
    setState({ message: '' });
  };
  return (
    <div className="parent">
      <ChatHistory messages={props.chat.messages} />
      <ChatInterface
        userName={props.system.userName}
        message={state.message}
        updateMessage={updateMessage}
        sendMessage={applySendMessage}
      />
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  system: state.system,
  chat: state.chat,
});

export default connect(mapStateToProps, {
  sendMessage,
  updateSession,
  thunkSendMessage,
})(Chat);
