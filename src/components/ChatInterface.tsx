import React, { createRef, useEffect } from 'react';

// interface ChatInterfaceProps {
//   message: string;
//   userName: string;
//   sendMessage: (message: string) => void;
//   updateMessage: (event: React.SyntheticEvent<{ value: string }>) => void;
// }

// : React.FunctionComponent<ChatInterfaceProps> = ({
//   userName,
//   message,
//   updateMessage,
//   sendMessage,
// })

const ChatInterface = ({ input, sendMessage, updateMessage }) => {
  function keyPress(e: React.KeyboardEvent<object>) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  }

  const inputRef = createRef<HTMLInputElement>()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <div className="chat-interface">
      <input
        ref={inputRef}
        className="chat-input"
        value={input}
        onChange={updateMessage}
        onKeyPress={keyPress}
        placeholder="Type here..."
      />
      <button 
        className="chat-interface button"
        type="submit"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInterface;
