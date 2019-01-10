// packages
import React from 'react';
import SplitText from 'react-pose-text';
import { Link } from 'react-router-dom';

// styles
import './landingImage.scss';

// images
import barChartBW from '../../../assets/bar-chart-bw.svg';
import barChartOrig from '../../../assets/bar-chart-orig.svg'
import keyboard from  '../../../assets/keyboard.svg';
import keyboardHighlighted from '../../../assets/keyboard-highlighted.svg';
import * as routes from "../../routes";

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

class LandingImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onHover: {
        barChart: false,
        keyboard: false
      }
    }
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

    const businessText = <p>Are you a small business owner who needs a website to grow your business,
        but don't know how or where to start?</p>;

    const volunteerText = <p>Are you a tech professional/enthusiast who is passionate
        about making a difference in your local community with your skills and time?</p>;

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
              <Link to={routes.DASHBOARD_FRONTEND}>
                <img src={onHover.keyboard ? keyboard : keyboardHighlighted} onMouseOver={this.onImageHover.bind(this)}
                   onMouseOut={this.onImageExit.bind(this)} alt="bar-chart" className="keyboard-image"/>
              </Link>
              { onHover.keyboard ? <h1 className="infoTextVolunteer">volunteer</h1> : null }
              { onHover.barChart ? <h1 className="infoTextBusiness">business</h1> : null }
              <Link to={routes.DASHBOARD_FRONTEND}>
                <img src={onHover.barChart ? barChartOrig : barChartBW} onMouseOver={this.onImageHover.bind(this)}
                     onMouseOut={this.onImageExit.bind(this)} alt="bar-chart" className="barChart-image"/>
              </Link>
            </div>
            <a className="arrow-wrapper" href='#latest-projects'>
              <ArrowDown className="arrow-down"/>
            </a>
          </div>
        </div>
    );
  }
}

export default LandingImage;
