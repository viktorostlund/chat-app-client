import React, { createRef, useEffect } from 'react';

export const getMessageClass = (message, userName) => {
  if (message.userName) {
    if (message.userName === userName) {
      return 'message-item-self';
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
      {messages.map((message, i) => (
        <div
          ref={messages[messages.length - 1] === message ? lastMessage : notLastMessage}
          className={
            message.userName === userName ? 'message__container-self' : 'message__container'
          }
          key={message.time}
        >
          <div className={getMessageClass(message, userName)}>
            {message.userName ? (
              <div>
                <div className="message__username">{message.userName}</div>
                <div>{message.message}</div>
              </div>
            ) : (
              <div>{message.message}</div>
            )}
            {/* <h3>Sent: {message.time}</h3> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllMessages;
