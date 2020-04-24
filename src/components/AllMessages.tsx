import React, { createRef, useEffect } from 'react';

export interface Message {
  userName: string;
  time: number;
  message: string;
  id: number;
  status: string;
  sendToSelf: false;
}

export const getMessageClass = (message, userName) => {
  if (message.userName) {
    if (message.userName === userName) {
      return 'message-item message-item--self';
    }
    return 'message-item';
  }
  return 'message-item-server';
};

const AllMessages = ({ messages, userName }) => {
  const lastMessage = createRef<HTMLDivElement>();
  const notLastMessage = createRef<HTMLDivElement>();

  useEffect(() => {
    if (lastMessage.current) {
      lastMessage.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, lastMessage]);

  return (
    <div className="all-messages">
      {messages.map((message: Message) => (
        <div
          ref={messages[messages.length - 1] === message ? lastMessage : notLastMessage}
          className={`message__container${
            message.userName === userName ? ' message__container--self' : ''
          }`}
          key={message.time}
        >
          <div className={getMessageClass(message, userName)}>
            {message.userName ? (
              <div>
                <div className="message-text-container">{message.userName}</div>
                <div>{message.message}</div>
              </div>
            ) : (
              <div>{message.message}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllMessages;
