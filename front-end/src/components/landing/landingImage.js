// packages
import React from 'react';
import SplitText from 'react-pose-text';

// styles
import './landingImage.scss';

const ArrowDown = () => {
  return <svg id="i-chevron-bottom" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
    <path d="M30 12 L16 24 2 12" /></svg>;
};


// Animation properties for React Pose Text to add animation for each letter
const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 70,
  },
};

const LandingImage = () => {
  return (
    <div className="landing-image">
      <div className="overlay">
        <span className="intro-title">
          <h1>
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
              Seattle Voluntech
            </SplitText>
          </h1>
        </span>
        <div className="intro-headline">
          <p>Are you a small business owner who needs a website to grow
            your business, but don't know how or where to start?</p>
          <p>Are you a tech professional/enthusiast who is passionate
            about making a difference in your local community with your
            skills and time?</p>
        </div>
        <a className="arrow-wrapper" href='#latest-projects'>
          <ArrowDown className="arrow-down"/>
        </a>
      </div>
    </div>
  );
};

export default LandingImage;
