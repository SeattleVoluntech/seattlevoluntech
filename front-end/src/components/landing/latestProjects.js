// packages
import React from 'react';

// styles
import './latestProjects.scss';

class LatestProjects extends React.Component {
  render() {
    return (
      <div id='latest-projects' className='latest-projects'>
        <h3>Latest Projects</h3>
        <hr className="underline"/>
        <div className='new-projects'>
          <div className='main-project'>
            <h4>Project Name</h4>
            <h5>Project Sponsor</h5>
            <h6>Project Headline</h6>
          </div>
          <div className='main-project'>
            <h4>Project Name</h4>
            <h5>Project Sponsor</h5>
            <h6>Project Headline</h6>
          </div>
          <div className='main-project'>
            <h4>Project Name</h4>
            <h5>Project Sponsor</h5>
            <h6>Project Headline</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default LatestProjects;
