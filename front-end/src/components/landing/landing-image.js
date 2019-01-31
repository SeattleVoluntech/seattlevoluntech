// packages
import React from 'react';
import SplitText from 'react-pose-text';
import { Link } from 'react-router-dom';

// styles
import './landing-image.scss';

// images

// routes
import * as routes from '../../routes';

// Animation properties for React Pose Text to add animation for each letter
const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 70,
  },
};

class LandingImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onHover: {
        barChart: false,
        keyboard: false
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

  render() {
    const { onHover } = this.state;

    return (
        <div className='landing-image'>
          <div className='overlay'>
            <section>
              <h1 className='siteTitle'>
                <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>Seattle Voluntech</SplitText>
              </h1>
              <div className='intro-text'>
                <p>Connecting minority and immigrant-owned small
                  businesses with technical volunteers in the Seattle area.</p>
              </div>
            </section>
            <div className='intro-headline'>
              { onHover.keyboard ? <h1 className='infoTextVolunteer'>I want to volunteer.</h1> : null }
              { onHover.barChart ? <h1 className='infoTextBusiness'>I am a business.</h1> : null }
            </div>
          </div>
        </div>
    );
  }
}

export default LandingImage;
