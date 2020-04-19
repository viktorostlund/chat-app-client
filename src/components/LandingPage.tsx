import * as React from 'react';
import { connect } from 'react-redux';
import { updateSession } from '../store/system/actions';

function LandingPage({ system, updateSession }) {
  const login = () => {
    updateSession({
      loggedIn: true,
      session: '',
      userName: 'Viktor',
    });
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
    system: state.system
  };
};

export default connect(mapStateToProps, {
  updateSession,
})(LandingPage);
