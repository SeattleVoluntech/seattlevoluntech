import React from 'react';

// custom components
import LandingAuthForm from '../landing-auth-form/landing-auth-form';

class Landing extends React.Component {
  render() {
    return (
        <section>
          <p>Hello Ming</p>
          <LandingAuthForm/>
        </section>
    );
  }
}

export default Landing;
