// packages
import React from 'react';

// styles
import './latestProjects.scss';

class LatestProjects extends React.Component {
  render() {
    return (
      <div id="latest-projects" className="latest-projects">
        <h3>Latest Projects</h3>
        <div className="projects">
          <div className="project">
            <p>Project Name</p>
            <h5>Project Sponsor</h5>
            <h6>Project Headline</h6>
          </div>
          <div className="project">
            <p>Project Name</p>
            <h5>Project Sponsor</h5>
            <h6>Project Headline</h6>
          </div>
          <div className="project">
            <p>Project Name</p>
            <h5>Project Sponsor</h5>
            <h6>Project Headline</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default LatestProjects;
