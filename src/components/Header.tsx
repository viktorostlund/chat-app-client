import * as React from 'react';

const Header = ({ sendLogout, userName }) => {
  return (
    <div className="chat-header">
      <div className="chat-header__username">Chatting as <b>{userName}</b></div>
      <button className="chat-header__button" type="submit" onClick={sendLogout}>
        Leave chat
      </button>
    </div>
  );
};

export default Header;
