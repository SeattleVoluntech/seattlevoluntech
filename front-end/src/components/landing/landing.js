// packages
import React from 'react';

// custom components
import LandingAuthForm from '../landing-auth-form/landing-auth-form'; // eslint-disable-line
import NavUi from '../nav-ui/nav-ui';
import LandingImage from './landingImage';
import LatestProjects from './latestProjects';
import Footer from '../footer/footer';
import volunteer from '../../../assets/red_Volunteer.png';
import cashRegister from '../../../assets/red_Cash.png';

// styles
import './landing.scss';

// routes
import * as routes from '../../routes';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  signUpForm() {
    return <div className="centered">
      <h2 className="formHeader">Sign Up</h2>
      <LandingAuthForm type='signup' onComplete={this.handleSignup}/>
    </div>;
  }

  loginForm() {
    return <div className="centered">
      <h2 className="formHeader">Login</h2>
      <LandingAuthForm type='login' onComplete={this.handleLogin}/>
    </div>;
  }

  render() {
    const { location } = this.props;
    const businessText = <p>Are you a small business owner who needs a website to
      grow your business, but don't know how or where to start?</p>;

    const volunteerText = <p>Are you a tech professional/enthusiast who is passionate
        about making a difference in your local community with your skills and time?</p>;
    return (
      <React.Fragment>
        <section>
          <NavUi location={location} />
          <section>
            <LandingImage />
            {/* { location.pathname === routes.LOGIN_FRONTEND ? this.loginForm() : null } */}
            {/* { location.pathname === routes.SIGNUP_FRONTEND ? this.signUpForm() : null } */}
            <div className="intro-body">
              <div className="business">
                { <img src={cashRegister} /> }
                { businessText }
              </div>
              <div className="vertical-line" />
              <div className="volunteer">
                { <img src={volunteer} /> }
                { volunteerText }
              </div>
            </div>
          </section>
          <LatestProjects />
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Landing;
