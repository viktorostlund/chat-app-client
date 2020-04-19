import * as React from 'react';
import Chat from './components/chat/index';
import { connect } from 'react-redux';
import LandingPage from './components/landing_page/index';

function App({ system }) {
  return (
    <div>
      { console.log('App rendered.') }
      { system.loggedIn ? <Chat /> : <LandingPage /> }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    system: state.system,
  };
};

export default connect(mapStateToProps)(App);
