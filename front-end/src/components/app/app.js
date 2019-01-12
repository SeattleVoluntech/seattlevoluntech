import '@babel/polyfill';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../../../style/base.scss';
import * as routes from '../../routes';

// custom components
import Landing from '../landing/landing';
import Projects from '../open-projects/open-projects';
import AuthRedirect from '../auth-redirect/auth-redirect';

class App extends React.Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <div>
              {/* <Route path='*' component={Landing}/> */}
              <Route exact path={routes.SITE_ROOT_FRONTEND} component={Landing}/>
              <Route path={routes.LOGIN_FRONTEND} component={Landing}/>
              <Route path={routes.SIGNUP_FRONTEND} component={Landing}/>
              <Route path={routes.PROJECTS_FRONTEND} component={Projects}/>
            </div>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
