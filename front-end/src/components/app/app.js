import '@babel/polyfill';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../../../style/base.scss';
import * as routes from '../../routes';

// custom components
import Landing from '../landing/landing';
import AboutUs from '../about/aboutUs';
import Dashboard from '../dashboard/dashboard';
import AuthRedirect from '../auth-redirect/auth-redirect';
import Projects from '../open-projects/open-projects';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            {/* <Route path='*' component={Landing}/> */}
            <Route exact path={routes.SITE_ROOT_FRONTEND} component={Landing} />
            <Route path={routes.LOGIN_FRONTEND} component={Landing} />
            <Route path={routes.SIGNUP_FRONTEND} component={Landing} />
            <Route path={routes.ABOUT_FRONTEND} component={AboutUs} />
            <Route path={routes.DASHBOARD_FRONTEND} component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
