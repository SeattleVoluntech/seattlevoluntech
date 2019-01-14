import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as routes from '../../routes';
import './nav-ui.scss';
import voluntechLogo from '../../../assets/newlogo.svg';
import signOutIcon from '../../../assets/sign-out-orig.svg';
import signOutIconHighlighted from '../../../assets/sign-out-highlighted.svg';

class NavUi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onHover: {
        signOut: false,
      },
    };
  }

  onImageHover(event) {
    const propertyToChange = event.target.className.split('-')[0];
    const { onHover } = this.state;
    onHover[propertyToChange] = true;
    return this.setState({ onHover });
  };

  onImageExit(event) {
    const { onHover } = this.state;
    const propertyToChange = event.target.className.split('-')[0];
    onHover[propertyToChange] = false;
    return this.setState({ onHover });
  };

  // CSS classNames for each nav instance can be unique for custom looks
  whichMenuSet(location) {
    const loginSet = <nav className ='loginSetNavigation'>
      <Link to={routes.SITE_ROOT_FRONTEND}>
        <div className='logo'>
          <img src={voluntechLogo} className='navUILogo'/>
          <div className='logoName'>
            <p>Seattle</p>
            <p>Voluntech</p>
          </div>
        </div>
      </Link>
      <div className='navLinks'>
        <Link to={routes.LOGIN_FRONTEND} className='navLink'>Login</Link>
        <Link to={routes.SIGNUP_FRONTEND} className='navLink'>Sign Up</Link>
        <Link to={routes.SITE_ROOT_FRONTEND} className='navLink'>About Us</Link>
        <Link to={routes.PROJECTS_FRONTEND} className='navLink'>Projects</Link>
        <Link to={routes.SITE_ROOT_FRONTEND} className='navLink'>Home</Link>
      </div>
    </nav>;

    const dashboardSet = <nav className ='loginSetNavigation'>
      <Link to={routes.SITE_ROOT_FRONTEND}>
        <div className='logo'>
          <img src={voluntechLogo} className='navUILogo'/>
          <div className='logoName'>
            <p>Seattle</p>
            <p>Voluntech</p>
          </div>
        </div>
      </Link>
      <div className='navLinks'>
        <Link to={routes.SITE_ROOT_FRONTEND} className='navLink'>
          <img src={this.state.onHover.signOut ? signOutIconHighlighted : signOutIcon}
            onMouseOver={this.onImageHover.bind(this)}
            onMouseOut={this.onImageExit.bind(this)} alt="sign-out" className="signOut"/>
          </Link>
        <Link to={routes.BLOG_FRONTEND} className='navLink'>Blog</Link>
        <Link to={routes.ABOUT_US_FRONTEND} className='navLink'>About Us</Link>
        <Link to={routes.PROJECTS_FRONTEND} className='navLink'>Projects</Link>
      </div>
    </nav>;

    if (location.pathname === routes.LOGIN_FRONTEND) {
      console.log('loading loginSet');
      return loginSet;
    }

    if (location.pathname === routes.DASHBOARD_FRONTEND) {
      console.log('loading dashboardSet');
      return dashboardSet;
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
