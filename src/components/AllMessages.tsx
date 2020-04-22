import React, { createRef, useEffect } from 'react';

const AllMessages = ({ messages, userName }) => {

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
        <div className={message.userName === userName ? "message__container-self" : "message__container"} key={message.time}>
          <div className={message.userName ? (message.userName === userName ? "message-item-self" : "message-item") : "message-item-server"}>
            {message.userName ? <div><div className="message__username">{message.userName}</div><div>{message.message}</div></div> : <div>{message.message}</div>}
            {/* <h3>Sent: {message.time}</h3> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllMessages;
