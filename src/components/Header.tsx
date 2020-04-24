import * as React from 'react';

const Header = ({ sendLogout, userName }) => {
  return (
    <div className="chat-header">
      <div className="logo logo--small">QuickChat</div>
      <div className="chat-header__text">
        <b>{userName}</b>
        <button className="chat-header__button" type="submit" onClick={sendLogout}>
          Leave
        </button>
      </div>
    </div>
  );
};

export default Header;
