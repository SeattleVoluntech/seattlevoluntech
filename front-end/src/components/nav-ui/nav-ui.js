import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as routes from '../../routes';
import './nav-ui.scss';
import voluntechLogo from '../../../assets/voluntechLogo.jpg';

class NavUi extends React.Component {
  // CSS classNames for each nav instance can be unique for custom looks
  whichMenuSet(location) {
    const loginSet = <nav className ='loginSetNavigation'>
      <Link to={routes.SITE_ROOT_FRONTEND}>
      <img src={voluntechLogo} className="navUILogo"/></Link>
      <Link to={routes.LOGIN_FRONTEND} className='navLink'>Login</Link>
      <Link to={routes.SIGNUP_FRONTEND} className='navLink'>Sign Up</Link>
      <Link to={routes.SITE_ROOT_FRONTEND} className='navLink'>About Us</Link>
      <Link to={routes.SITE_ROOT_FRONTEND} className='navLink'>Projects</Link>
      <Link to={routes.SITE_ROOT_FRONTEND} className='navLink'>Home</Link>
    </nav>;

    if (location.pathname === routes.LOGIN_FRONTEND) {
      console.log('loading loginSet');
      return loginSet;
    }

    return loginSet;
  }

  render() {
    const { location } = this.props;
    return (
      <section id="navControl">
        {this.whichMenuSet(location)}
      </section>
    );
  }
}

NavUi.propTypes = {
  location: PropTypes.object,
};

export default NavUi;
