import '@babel/polyfill';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../landing/landing';
import '../../../style/base.scss';

class App extends React.Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <div>
              <Route exact path='/' component={Landing}/>
            </div>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
