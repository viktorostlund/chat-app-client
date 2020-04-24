import React, { createRef, useEffect } from 'react';
import { connect } from 'react-redux';
import * as systemActions from '../store/system/actions';

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
  };

  const inputRef = createRef<HTMLInputElement>();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <div className="landing-page__container">
      <div className="logo">QuickChat</div>
      <div
        className={
          system.errorMessage ? 'landing-page__feedback' : 'landing-page__feedback--hidden'
        }
      >
        {system.errorMessage}
      </div>
      <input
        ref={inputRef}
        className={
          system.userName.length > 10
            ? 'landing-page__input landing-page__input--invalid'
            : 'landing-page__input'
        }
        value={system.userName}
        onChange={updateUsername}
        onKeyPress={keyPress}
        placeholder="Your name..."
      />
      <button className="landing-page__button" type="submit" onClick={sendLoginIfConnected}>
        Jump in
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
  ...systemActions,
})(LandingPage);
