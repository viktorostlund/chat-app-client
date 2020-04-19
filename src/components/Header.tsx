import * as React from 'react';

const Header = ({ logout }) => {
  return (
    <div className="chat-interface">
      <button type="submit" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Header;
