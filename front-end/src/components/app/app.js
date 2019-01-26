import '@babel/polyfill';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../../../style/base.scss';
import * as routes from '../../routes';

// custom components
import Landing from '../landing/landing';
import Dashboard from '../dashboard/dashboard';
import AuthRedirect from '../auth-redirect/auth-redirect';
import Projects from '../open-projects/open-projects';
import AboutUs from '../about-us/about-us';
import ThankYou from "../thank-you/thank-you";
import {Redirect, Switch} from "react-router";

class App extends React.Component {
  render() {
    return (
        <div>
          <BrowserRouter basename={process.env.CDN_URL}>
            <div>
              {/* <Route path='*' component={Landing}/> */}
              <Route exact path="/" >
                  <Redirect to={routes.SITE_ROOT_FRONTEND} />
              </Route>
              <Route exact path={routes.SITE_ROOT_FRONTEND} component={Landing}/>
              <Route path={routes.LOGIN_FRONTEND} component={Landing}/>
              <Route path={routes.SIGNUP_FRONTEND} component={Landing}/>
              <Route path={routes.DASHBOARD_FRONTEND} component={Dashboard}/>
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
