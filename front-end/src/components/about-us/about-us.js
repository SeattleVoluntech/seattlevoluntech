// packages
import React from 'react';

// custom components

// styles
import './about-us.scss';

const AboutUs = (props) => {
  const { location } = props;
  return (
    <div className="about-us-container">
      <div className='about-us'>
        <div className="about-style-container">
          <h3 className="header-styles">About Us!</h3>
          <h2 className="about-styles">
            <p>Seattle VolunTech is a platform that connects minority and immigrant-owned
            small businesses with technical resources necessary to improve web presence and brand
            awareness in the Seattle area.</p>
            <p>Seattle VolunTech is one of three projects resulting from
            the efforts of the <a href='https://www.washingtontechnology.org/'>WTIA</a> ION Collaborators - Cohort 3 developed and maintained in concert
            with Code Fellows code school in Seattle.</p>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
