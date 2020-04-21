import * as React from 'react';
import { connect } from 'react-redux';
import { changeErrorMessage } from '../store/system/actions';

function LandingPage({ sendLogin, system, updateUsername, server, changeErrorMessage }) {

  function keyPress(e: React.KeyboardEvent<object>) {
    if (e.key === 'Enter') {
      sendLoginIfConnected();
    }
  }

  const sendLoginIfConnected = () => {
    if (server.connected) {
      sendLogin(); 
    } else {
      changeErrorMessage('Server error');
    }
  }

  return (
    <div>
      <div>
        The simple chat room
      </div>
      <div>
        {system.errorMessage}
      </div>
      <input
        value={system.userName}
        onChange={updateUsername}
        onKeyPress={keyPress}
        className="chat-input"
        placeholder="Your name..."
      />
      <button type="submit" onClick={sendLoginIfConnected}>
        Enter chat
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    system: state.system,
  };
};

export default connect(mapStateToProps, {
  changeErrorMessage,
})(LandingPage);
