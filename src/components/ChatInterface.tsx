import * as React from 'react';

interface ChatInterfaceProps {
  message: string;
  userName: string;
  sendMessage: (message: string) => void;
  updateMessage: (event: React.SyntheticEvent<{ value: string }>) => void;
}

const ChatInterface: React.FunctionComponent<ChatInterfaceProps> = ({
  userName,
  message,
  updateMessage,
  sendMessage,
}) => {
  function keyPress(e: React.KeyboardEvent<object>) {
    if (e.key === 'Enter') {
      send();
    }
  }

  function send() {
    sendMessage(message);
  }

  return (
    <div className="chat-interface">
      <h3>User: {userName} </h3>
      <input
        value={message}
        onChange={updateMessage}
        onKeyPress={keyPress}
        className="chat-input"
        placeholder="Type a message..."
      />
      <button type="submit" onClick={send}>Send</button>
    </div>
  );
};

export default ChatInterface;
