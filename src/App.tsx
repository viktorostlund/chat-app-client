import * as React from 'react';
import Chat from './components/Chat';
import { connect } from 'react-redux';
import LandingPage from './components/LandingPage';

function App({ system }) {
  console.log('Apps system: ', system)
  return (
    <div>
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
