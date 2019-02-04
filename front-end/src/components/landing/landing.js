// packages
import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../routes';

// custom components
import LandingAuthForm from '../landing-auth-form/landing-auth-form'; // eslint-disable-line
import LandingImage from './landing-image';
import LatestProjects from './latest-projects';
import volunteer from '../../../assets/red_Volunteer.png';
import cashRegister from '../../../assets/red_Cash.png';
import Button from '../button/button';

// styles
import './landing.scss';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      ticker: false,
      opacity: false,
    };
    this.signUp = this.signUp.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (!this.state.ticker) {
      if (window.scrollY > 1050) {
        this.setState({ ticker: true, opacity: true });
      }
    }
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

  signUp(e) {
    if (e.target.className === 'signup-business') {
      this.setState({ user: 'business' });
    } else if (e.target.className === 'signup-volunteer') {
      this.setState({ user: 'volunteer' });
    }
  }

  handleReload() {
    window.location.assign('http://localhost:8080/login');
  }

  render() {
    const { location } = this.props;
    const businessText = <p>Are you a small business owner who needs a website to
      grow your business, but don't know how or where to start?</p>;

    const volunteerText = <p>Are you a tech professional/enthusiast who is passionate
        about making a difference in your local community?</p>;

    const about = <div className='about-container'>
      <p>Seattle VolunTech is a platform that connects minority and immigrant-owned
      small businesses with technical resources necessary to improve web presence and brand
      awareness in the Seattle area.</p>
      <p>Seattle VolunTech is one of three projects resulting from
      the efforts of the <a href='https://www.washingtontechnology.org/'>WTIA</a> ION Collaborators - Cohort 3 developed and maintained in concert
      with Codefellows code school in Seattle.</p></div>;

    return (
      <React.Fragment>
        <section>
          <section>
            <LandingImage />
            <div className='intro-body'>
              <div className='business'>
                <img src={cashRegister} alt='cash register icon'/>
                <h2>Businesses</h2>
                { businessText }
                <Link to={routes.SIGNUP_FRONTEND} onClick={this.handleReload}>
                  <Button id='signup-business' className='signup-business'
                    onClick={this.signUp}>Yes, I have a project!</Button>
                </Link>
              </div>
              <div className='vertical-line' />
              <div className='volunteer'>
                <img src={volunteer} alt='people hand raise icon'/>
                <h2>Volunteers</h2>
                { volunteerText }
                <Link to={routes.SIGNUP_FRONTEND} onClick={this.handleReload}>
                  <Button id='signup-volunteer' className='signup-volunteer'
                    onClick={this.signUp}>Yes, I want to help!</Button>
                </Link>
              </div>
            </div>
          </section>
          <section className ='main-details'>
            { about }
          </section>
          <LatestProjects className={this.state.opacity ? 'open' : 'close'} />
        </section>
      </React.Fragment>
    );
  }
}

export default Landing;
