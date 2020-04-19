import * as React from 'react';
import { connect } from 'react-redux';
import { updateSession } from '../../store/system/actions';
import { sendMessage } from '../../store/chat/actions';

function LandingPage({ system, chat, updateSession, sendMessage }) {
  const login = () => {
    console.log(system)
    updateSession({
      loggedIn: true,
      session: '',
      userName: 'Viktor',
    });
    console.log(system)
  }

  return (
    <div>
      <button type="submit" onClick={login}>
        Login as Viktor
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    system: state.system,
    chat: state.chat,
  };
};

export default connect(mapStateToProps, {
  sendMessage,
  updateSession,
})(LandingPage);
