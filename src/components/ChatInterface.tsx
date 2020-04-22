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

const ChatInterface = ({ input, sendMessage, updateMessage }) => {
  function keyPress(e: React.KeyboardEvent<object>) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  }
  return (
    <div className="chat-interface">
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
