import '@babel/polyfill';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../../../style/base.scss';
import * as routes from '../../routes';

// custom components
import Landing from '../landing/landing';
import Callback from '../callback/callback';
import Dashboard from '../dashboard/dashboard';
import DashboardEdit from '../dashboard/dashboard-edit';
import AuthRedirect from '../auth-redirect/auth-redirect';
import Projects from '../open-projects/open-projects';
import ProjectDetails from '../project-details/project-details';
import AboutUs from '../about-us/about-us';
import ThankYou from '../thank-you/thank-you';

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
              <Route path={routes.CALLBACK_FRONTEND} component={Callback}/>
              <Route path={routes.DASHBOARD_FRONTEND} component={Dashboard}/>
              <Route path={routes.DASHBOARD_EDIT_FRONTEND} component={DashboardEdit}/>
              <Route path={routes.PROJECTS_FRONTEND} component={Projects}/>
              <Route path={routes.ABOUT_US_FRONTEND} component={AboutUs}/>
              <Route path={routes.THANK_YOU_FRONTEND} component={ThankYou}/>
            </div>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
