import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { IStoreState, rootReducer } from './reducers';
// import { Store, createStore, applyMiddleware } from 'redux';
// import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import App from './App';

// const store: Store<IStoreState> = createStore(
//   rootReducer,
//   applyMiddleware( logger )
// );

import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
