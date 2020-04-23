import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

// import { chatReducer } from '../store/chat/reducers';
import { systemReducer } from '../store/system/reducers';
import * as systemActions from '../store/system/actions';
// import * as chatActions from '../store/chat/actions';

import App from '../App';
import Header from '../components/Header';
import configureStore from '../store';
import ChatInterface from '../components/ChatInterface';

const store = configureStore();

describe('Should render elements properly, ', () => {
  test('App should renders button for logging in to chat correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const element = getByText(/jump in/i);
    expect(element).toBeInTheDocument();
  });

  test('Header should render a username given to it as a prop', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Header userName='Viktor' sendLogout={() => null} />
      </Provider>
    );
    const element = getByText(/Viktor/);
    expect(element).toBeInTheDocument();
  });

  test('Chat interface should render a send button', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ChatInterface input='' sendMessage={() => null} updateMessage={() => null} />
      </Provider>
    );
    const element = getByText(/send/i);
    expect(element).toBeInTheDocument();
  });
});

describe('Redux action calls should result in correct action, ', () => {
  it('login call should give login action', () => {
    const expectedAction = {
      type: 'LOGIN',
    };
    expect(systemActions.login()).toEqual(expectedAction);
  });

  it('change username call should give change username action', () => {
    const expectedAction = {
      type: 'CHANGE_USERNAME',
      payload: 'Viktor',
    };
    expect(systemActions.changeUsername('Viktor')).toEqual(expectedAction);
  });
});

const notLoggedInState = {
  loggedIn: false,
  session: '123456789',
  userName: 'Viktor',
  errorMessage: '',
};

const loggedInState = {
  loggedIn: true,
  session: '123456789',
  userName: 'Viktor',
  errorMessage: '',
};

describe('Systemreducer should return apply correct action to state ', () => {
  it('login, ', () => {
    expect(systemReducer(notLoggedInState, { type: 'LOGIN' })).toEqual({
      loggedIn: true,
      session: '123456789',
      userName: 'Viktor',
      errorMessage: '',
    });
  });

  it('logout, ', () => {
    expect(systemReducer(loggedInState, { type: 'LOGOUT' })).toEqual({
      loggedIn: false,
      session: '123456789',
      userName: '',
      errorMessage: '',
    });
  });
});
