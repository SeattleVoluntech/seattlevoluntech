// packages
import React from 'react';
import ProjectCard from '../open-projects/project-card';

// styles
import './latestProjects.scss';

class LatestProjects extends React.Component {
  render() {
    return (
      <div className='latest-projects-container'>
        <h2>Latest Projects</h2>
        <hr className='underline'/>
        <div className='latest-projects'>
          <ProjectCard className='latest-project' />
          <ProjectCard className='latest-project' />
          <ProjectCard className='latest-project' />
        </div>
      </div>
    );
  }
}

export default LatestProjects;
