import { createStore, applyMiddleware } from 'redux';

// development tools currently enabled...
import { composeWithDevTools } from 'redux-devtools-extension';

import reduxReporter from './middleware/redux-reporter';
import thunk from './middleware/redux-thunk';
import mainReducer from './reducer/main-reducer';

export default () => {
  const store = createStore(mainReducer,
    // devtools enabled...
    composeWithDevTools(applyMiddleware(reduxReporter, thunk)));
  return store;
};
