import { createStore, combineReducers } from 'redux';
import { systemReducer } from './system/reducers';
import { chatReducer } from './chat/reducers';

const rootReducer = combineReducers({
  chat: chatReducer,
  system: systemReducer,
});

export default function configureStore() {
  return createStore(rootReducer);
}
