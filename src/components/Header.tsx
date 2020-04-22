import * as React from 'react';

const Header = ({ sendLogout, userName }) => {
  return (
    <div className="chat-header">
      <div className="app-header--small">
        QuickChat
      </div> 
      <div className="chat-header__username">
        Chatting as <b>{userName}</b>
        <button className="chat-header__button" type="submit" onClick={sendLogout}>
          Leave chat
        </button>
      </div>
    </div>
  );
};

export default Header;
