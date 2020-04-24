import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { chatReducer } from '../store/chat/reducers';
import { systemReducer } from '../store/system/reducers';
import * as systemActions from '../store/system/actions';
import * as chatActions from '../store/chat/actions';

import App from '../App';
import Header from '../components/Header';
import AllMessages, { getMessageClass } from '../components/AllMessages';
import configureStore from '../store';
import ChatInterface from '../components/ChatInterface';

const store = configureStore();

describe('Rendering components', () => {
  it('App and LandingPage', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const element = getByText(/jump in/i);
    expect(element).toBeInTheDocument();
  });

  it('Header', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Header userName="Viktor" sendLogout={() => null} />
      </Provider>
    );
    const element = getByText(/Viktor/);
    expect(element).toBeInTheDocument();
  });

  it('ChatInterface', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ChatInterface input="" sendMessage={() => null} updateMessage={() => null} />
      </Provider>
    );
    const element = getByText(/send/i);
    expect(element).toBeInTheDocument();
  });

  it('AllMessages', () => {
    const original = window.HTMLElement.prototype.scrollIntoView;
    window.HTMLElement.prototype.scrollIntoView = () => {};
    const { getByText } = render(
      <Provider store={store}>
        <AllMessages
          messages={[{ userName: 'Viktor', message: 'Hello', time: '1' }]}
          userName="Viktor"
        />
      </Provider>
    );
    const element = getByText(/Hello/i);
    expect(element).toBeInTheDocument();
    window.HTMLElement.prototype.scrollIntoView = original;
  });
});

describe('Helper functions', () => {
  test('getMessageClass when message is written by self', () => {
    const messageClass = getMessageClass({ userName: 'Viktor' }, 'Viktor');
    expect(messageClass).toBe('message-item message-item--self');
  });

  test('getMessageClass when message is written by another', () => {
    const messageClass = getMessageClass({ userName: 'Viktor' }, 'Amanda');
    expect(messageClass).toBe('message-item');
  });

  test('getMessageClass when server message', () => {
    const messageClass = getMessageClass({ userName: '' }, 'Amanda');
    expect(messageClass).toBe('message-item-server');
  });
});

describe('Actions', () => {
  it('login', () => {
    const expectedAction = {
      type: 'LOGIN',
    };
    expect(systemActions.login()).toEqual(expectedAction);
  });

  it('change username', () => {
    const expectedAction = {
      type: 'CHANGE_USERNAME',
      payload: 'Viktor',
    };
    expect(systemActions.changeUsername('Viktor')).toEqual(expectedAction);
  });

  it('change error message', () => {
    const expectedAction = {
      type: 'CHANGE_ERROR_MESSAGE',
      payload: 'Server error',
    };
    expect(systemActions.changeErrorMessage('Server error')).toEqual(expectedAction);
  });

  it('add message', () => {
    const expectedAction = {
      type: 'ADD_MESSAGE',
      payload: { userName: 'Viktor', message: 'Hello' },
    };
    expect(chatActions.addMessage({ userName: 'Viktor', message: 'Hello' })).toEqual(
      expectedAction
    );
  });

  it('change input', () => {
    const expectedAction = {
      type: 'CHANGE_INPUT',
      payload: 'a',
    };
    expect(chatActions.changeInput('a')).toEqual(expectedAction);
  });

  it('delete messages', () => {
    const expectedAction = {
      type: 'DELETE_MESSAGES',
    };
    expect(chatActions.deleteMessages()).toEqual(expectedAction);
  });
});

const notLoggedInState = {
  loggedIn: false,
  userName: 'Viktor',
  errorMessage: '',
};

const loggedInState = {
  loggedIn: true,
  userName: 'Viktor',
  errorMessage: '',
};

const chatState = {
  messages: [{ userName: 'Viktor', message: 'Hello', time: '1' }],
  input: '',
};

const expectedChatState = {
  messages: [
    { userName: 'Viktor', message: 'Hello', time: '1' },
    { userName: 'Amanda', message: 'Hi', time: '2' },
  ],
  input: '',
};

describe('Reducers', () => {
  it('login', () => {
    expect(systemReducer(notLoggedInState, { type: 'LOGIN' })).toEqual({
      loggedIn: true,
      userName: 'Viktor',
      errorMessage: '',
    });
  });

  it('logout', () => {
    expect(systemReducer(loggedInState, { type: 'LOGOUT' })).toEqual({
      loggedIn: false,
      userName: '',
      errorMessage: '',
    });
  });

  it('change username', () => {
    expect(systemReducer(loggedInState, { type: 'CHANGE_USERNAME', payload: 'Amanda' })).toEqual({
      loggedIn: true,
      userName: 'Amanda',
      errorMessage: '',
    });
  });

  it('change error message', () => {
    expect(
      systemReducer(loggedInState, { type: 'CHANGE_ERROR_MESSAGE', payload: 'Server error' })
    ).toEqual({
      loggedIn: true,
      userName: 'Viktor',
      errorMessage: 'Server error',
    });
  });

  it('add message', () => {
    expect(
      chatReducer(chatState, {
        type: 'ADD_MESSAGE',
        payload: { userName: 'Amanda', message: 'Hi', time: '2' },
      })
    ).toEqual(expectedChatState);
  });

  it('delete messages', () => {
    expect(chatReducer(chatState, { type: 'DELETE_MESSAGES' })).toEqual({
      ...chatState,
      messages: [],
    });
  });

  it('change input', () => {
    expect(chatReducer(chatState, { type: 'CHANGE_INPUT', payload: 'Hi' })).toEqual({
      ...chatState,
      input: 'Hi',
    });
  });
});
