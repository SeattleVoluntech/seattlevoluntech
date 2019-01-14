// packages
import React from 'react';
import posed from 'react-pose';

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
    this.state = {
      user: null,
    };
  }

  signUpForm() {
    return <div className='centered'>
      <h2 className='formHeader'>Sign Up</h2>
      <LandingAuthForm type='signup' onComplete={this.handleSignup}/>
    </div>;
  }

  loginForm() {
    return <div className='centered'>
      <h2 className='formHeader'>Login</h2>
      <LandingAuthForm type='login' onComplete={this.handleLogin}/>
    </div>;
  }

  signUp = (e) => {
    if (e.target.className === 'signup-business') {
      this.setState({ user: 'business' });
    } else if (e.target.className === 'signup-volunteer') {
      this.setState({ user: 'volunteer' });
    }
  }

  render() {
    const { location } = this.props;
    const businessText = <p>Are you a small business owner who needs a website to
      grow your business, but don't know how or where to start?</p>;

    const volunteerText = <p>Are you a tech professional/enthusiast who is passionate
        about making a difference in your local community with your skills and time?</p>;

    const about = <div className='about-container'>
      <p>Seattle VolunTech is a platform that connects minority and immigrant-owned
      small businesses with technical resources necessary to improve web presence and brand
      awareness in the Seattle area.</p>
      <p>Seattle VolunTech is one of three projects resulting from
      the efforts of the <a href='https://www.washingtontechnology.org/'>WTIA</a> ION Collaborators - Cohort 3 developed and maintained in concert
      with Codefellows code school in Seattle.</p></div>;

    const Button = posed.button({
      hoverable: true,
      pressable: true,
      init: { scale: 1 },
      hover: { scale: 1.2 },
      press: { scale: 1.1 }
    })
    return (
      <React.Fragment>
        <section>
          <NavUi location={location} />
          <section>
            <LandingImage />
            {/* { location.pathname === routes.LOGIN_FRONTEND ? this.loginForm() : null } */}
            {/* { location.pathname === routes.SIGNUP_FRONTEND ? this.signUpForm() : null } */}
            <div className='intro-body'>
              <div className='business'>
                <img src={cashRegister} alt='cash register icon'/>
                { businessText }
                <Button id='signup-business' className='signup-business'
                  onClick={this.signUp}>Yes, I have a project!</Button>
              </div>
              <div className='vertical-line' />
              <div className='volunteer'>
                <img src={volunteer} alt='people hand raise icon'/>
                { volunteerText }
                <Button id='signup-volunteer' className='signup-volunteer'
                  onClick={this.signUp}>Yes, I want to help!</Button>
              </div>
            </div>
          </section>
          <section className ='main-details'>
            { about }
          </section>
          <LatestProjects />
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Landing;
