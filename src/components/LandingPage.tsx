import * as React from 'react';
import { connect } from 'react-redux';
import { updateSession } from '../store/system/actions';

function LandingPage({ sendLogin, system, updateSession, updateUsername }) {

  function keyPress(e: React.KeyboardEvent<object>) {
    if (e.key === 'Enter') {
      sendLogin();
    }
  }
  
    // updateSession({
    //   loggedIn: true,
    //   session: '',
    //   userName: 'Viktor',
    // });

  return (
    <div>
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
      <button type="submit" onClick={sendLogin}>
        Login
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
  updateSession,
})(LandingPage);
