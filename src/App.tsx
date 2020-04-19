import * as React from 'react';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';

import Chat from './components/Chat';

function App() {
  
  const server = socketIOClient('http://localhost:3001/');
  
  return (
    <div>
      <Chat server={server} />
      {/* { system.loggedIn ? <Chat server={server} /> : <LandingPage /> } */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    system: state.system,
  };
};

export default connect(mapStateToProps)(App);
