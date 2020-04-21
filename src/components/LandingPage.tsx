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
    <div className="landing-page__container">
      <div className="app-header">
        A simple chat
      </div>
      <div className="landing-page__feedback">
        {system.errorMessage}
      </div>
      <input
        className="landing-page__input"
        value={system.userName}
        onChange={updateUsername}
        onKeyPress={keyPress}
        placeholder="Your name..."
      />
      <button className="landing-page__button" type="submit" onClick={sendLoginIfConnected}>
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
