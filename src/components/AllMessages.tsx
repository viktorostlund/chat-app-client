import React, { createRef, useEffect } from 'react';

const AllMessages = ({ messages, userName }) => {
  const scrollContainer = createRef<HTMLDivElement>();

  useEffect(() => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, scrollContainer]);

  const getMessageClass = (message) => {
    if (message.userName) {
      if (message.userName === userName) {
        return 'message-item-self';
      }
      return 'message-item';
    }
    return 'message-item-server';
  };

  return (
    <div ref={scrollContainer} className="all-messages">
      {messages.map((message) => (
        <div
          className={
            message.userName === userName ? 'message__container-self' : 'message__container'
          }
          key={message.time}
        >
          <div
            className={getMessageClass(message)}
          >
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
