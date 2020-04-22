import React, { createRef, useEffect } from 'react';

const AllMessages = ({ messages }) => {

  const scrollContainer = createRef<HTMLDivElement>()

  useEffect(() => {
    if (scrollContainer.current) {
      console.log('useEffect!')
      scrollContainer.current.scrollTo({
        top: document.body.scrollHeight,
        // left: 0,
        behavior: 'smooth'
      });
    }
  }, [messages, scrollContainer]);

  return (
    <div ref={scrollContainer} className="all-messages">
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
