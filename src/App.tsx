import * as React from 'react';
import { connect } from 'react-redux';
import Chat from './components/Chat';

function App() {
  return (
    <div>
      <Chat />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    system: state.system,
  };
};

export default connect(mapStateToProps)(App);
