import React, { createRef, useEffect } from 'react';

const ChatInterface = ({ input, sendMessage, updateMessage }) => {
  const inputRef = createRef<HTMLInputElement>();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  function keyPress(e: React.KeyboardEvent<object>) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  }

  return (
    <div className="chat-interface">
      <input
        ref={inputRef}
        className={
          input.length > 100
            ? 'chat-interface__input chat-interface__input--invalid'
            : 'chat-interface__input'
        }
        value={input}
        onChange={updateMessage}
        onKeyPress={keyPress}
        placeholder="Type here..."
      />
      <button className="chat-interface__button" type="submit" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default ChatInterface;
