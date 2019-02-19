import { createStore, applyMiddleware } from 'redux';

// development tools currently enabled...
import { composeWithDevTools } from 'redux-devtools-extension';

import reduxReporter from './middleware/redux-reporter';
import thunk from './middleware/redux-thunk';
import mainReducer from './reducer/main-reducer';

const localStorageMiddleware = ({ getState }) => {
  return next => (action) => {
    const result = next(action);
    localStorage.setItem('appState', JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  const data = localStorage.getItem('appState');
  if (data) {
    return JSON.parse(data);
  }
  return undefined;
};

export default () => {
  const store = createStore(mainReducer,
    reHydrateStore(),
    // devtools enabled...
    composeWithDevTools(applyMiddleware(reduxReporter, thunk, localStorageMiddleware)));
  return store;
};
