import React from 'react';
// To do later: organize css/scss into seperate file.
//import './business-profiles.scss';
import NavUi from '../nav-ui/nav-ui';
import LandingImage from './landingImage';
import LatestProjects from './latestProjects';

class BusinessProfiles extends React.Component{
    constructor(props){
        super(props);
        this.state = {BusinessProfiles};
    }
    render(){
        return(
            <React.Fragment>
            <section>
              <NavUi location={location} />
             
              <div className="business-profile-header">
              <div className="business-name">Business Name</div>
              <div>Email Address: abc@example.com</div>
              <div className="business-description">Business Description: goes here</div>
              
              
              
              </div>
              {/* { location.pathname === routes.LOGIN_FRONTEND ? this.loginForm() : null } */}
              {/* { location.pathname === routes.SIGNUP_FRONTEND ? this.signUpForm() : null } */}
            </section>
            <section>
              <div className="business-profile">
              
                <div className="business-box"></div>
                <div className="business-box"></div>
                <div className="business-box"></div>
                <div className="business-box"></div>
                
              </div>
            </section>
            <hr className="underline"/>
            
          </React.Fragment>
        );
    }
}

export default BusinessProfiles;