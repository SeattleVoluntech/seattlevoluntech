import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app/app';
import createStore from './create-store';

const store = createStore();
const root = document.createElement('div');
document.body.appendChild(root);

ReactDom.render(<Provider store={store}><App /></Provider>, root);
