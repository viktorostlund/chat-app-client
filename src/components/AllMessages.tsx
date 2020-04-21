import * as React from 'react';
// import { Message } from '../../store/chat/types';

// interface ChatHistoryProps {
//   messages: Message[];
// }

// : React.FunctionComponent<ChatHistoryProps> = ({ messages })

// function scrollToBottom() {
//   messages.scrollTop = messages.scrollHeight;
// }

const AllMessages = ({ messages }) => {
  return (
    <div className="all-messages">
      {messages.map((message) => (
        <div className="message-item" key={message.time}>
          <h3>From: {message.userName}</h3>
          <h3>Sent: {message.time}</h3>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
};

export default AllMessages;
