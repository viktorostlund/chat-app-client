import * as React from 'react';

const Header = ({ sendLogout, userName }) => {
  return (
    <div className="chat-interface">
      Logged in as {userName}
      <button type="submit" onClick={sendLogout}>
        Logout
      </button>
    </div>
  );
};

export default Header;
