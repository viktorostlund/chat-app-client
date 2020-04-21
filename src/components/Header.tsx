import * as React from 'react';

const Header = ({ sendLogout }) => {
  return (
    <div className="chat-interface">
      <button type="submit" onClick={sendLogout}>
        Logout
      </button>
    </div>
  );
};

export default Header;
