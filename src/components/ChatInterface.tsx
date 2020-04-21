import * as React from 'react';

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

const ChatInterface = ({ input, sendMessage, updateMessage, userName }) => {
  function keyPress(e: React.KeyboardEvent<object>) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  }

  // function send() {
  //   addMessage(message);
  // }

  return (
    <div className="chat-interface">
      <h3
        className="chat-interface h3"
      >{userName ? userName : 'Anonymous'}: </h3>
      <input
        className="chat-input"
        value={input}
        onChange={updateMessage}
        onKeyPress={keyPress}
        placeholder="Your message..."
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
