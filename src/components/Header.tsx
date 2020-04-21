import * as React from 'react';

const Header = ({ sendLogout, userName }) => {
  return (
    <div className="chat-interface">
      <div>You are chatting as <b>{userName} </b></div>
      <button type="submit" onClick={sendLogout}>
        Leave chat
      </button>
    </div>
  );
};

export default Header;
