import * as React from 'react';
import { Message } from '../store/chat/types';

interface ChatHistoryProps {
  messages: Message[];
}

const AllMessages: React.FunctionComponent<ChatHistoryProps> = ({ messages }) => {
  return (
    <div className="all-messages">
      {messages.map((message) => (
        <div className="message-item" key={message.time}>
          <h3>From: {message.username}</h3>
          <h3>Sent: {message.time}</h3>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
};

export default AllMessages;
