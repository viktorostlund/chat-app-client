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
      <h3>{userName ? userName : 'Anonymous'}: </h3>
      <input
        value={input}
        onChange={updateMessage}
        onKeyPress={keyPress}
        className="chat-input"
        placeholder="Type a message..."
      />
      <button type="submit" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default ChatInterface;
