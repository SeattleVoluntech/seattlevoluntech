import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as routes from '../../routes';

class AuthRedirect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // If routes file was eventually better organized, there could
    //   be some type of Object.values / filter to auto-populate this.
    // For now, manually declare allowed navigation here which is NOT:
    //   '/', '/login', '/signup', or '/dashboard'.
    //   See additional handling below.
    this.approvedPaths = {
      [routes.PROJECTS_FRONTEND]: routes.PROJECTS_FRONTEND,
    };
  }

  // this method works predominantly because of the SPA nav
  // if we were constantly rendering to different pages, logic would get hairy
  handleRoutingCases(path, token) {
    let sendTo = null;

    // default for "un-authorized users"
    if (!token) {
      sendTo = routes.LOGIN_FRONTEND;
    }

    // default for new user sign-up
    if (!token && path === routes.SIGNUP_FRONTEND) {
      console.log(this.props);
      sendTo = routes.DASHBOARD_EDIT_FRONTEND;
    }

    // default for "authorized users"
    if (token) {
      sendTo = routes.DASHBOARD_FRONTEND;
    }

    // additional catch:
    // only allow additional 'site traveling' if path is on approvedPaths list
    if (token && this.approvedPaths[path]) {
      sendTo = path;
    }

    // final catch *:
    // if sendTo is still null, send to login and let above logic sort it out
    if (sendTo === null) {
      sendTo = routes.LOGIN_FRONTEND;
    }

    // update previousPath to prevent redundant redirects:
    if (sendTo !== null) {
      this.setState({ previousPath: sendTo });
    }

    return <Redirect to={sendTo}/>;
  }

  render() {
    const { location } = this.props;
    const path = location.pathname;
    return (
        <div>
          { /* does not run anything until token state is current */ }
          { path !== this.state.previousPath ? this.handleRoutingCases(path) : null }
        </div>
    );
  }
}

AuthRedirect.propTypes = {
  location: PropTypes.object,
};

export default AuthRedirect;
