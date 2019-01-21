import React from 'react';
import ProjectCard from './project-card';
import './project-pane.scss';

class ProjectPane extends React.Component {
  render() {
    return (
      <div className="projectPane">
        <ProjectCard className="aProject" />
        <div className="aProject">
          <h2>Project Name</h2>
          <h3>Project Sponsor</h3>
          <h4>Project Headline</h4>
        </div>
        <div className="aProject">
          <h2>Project Name</h2>
          <h3>Project Sponsor</h3>
          <h4>Project Headline</h4>
        </div>
        <div className="aProject">
          <h2>Project Name</h2>
          <h3>Project Sponsor</h3>
          <h4>Project Headline</h4>
        </div>
        <div className="aProject">
          <h2>Project Name</h2>
          <h3>Project Sponsor</h3>
          <h4>Project Headline</h4>
        </div>
        <div className="aProject">
          <h2>Project Name</h2>
          <h3>Project Sponsor</h3>
          <h4>Project Headline</h4>
        </div>
        <div className="aProject">
          <h2>Project Name</h2>
          <h3>Project Sponsor</h3>
          <h4>Project Headline</h4>
        </div>
        <div className="aProject">
          <h2>Project Name</h2>
          <h3>Project Sponsor</h3>
          <h4>Project Headline</h4>
        </div>
        <div className="aProject">
          <h2>Project Name</h2>
          <h3>Project Sponsor</h3>
          <h4>Project Headline</h4>
        </div>
      </div>
    );
  }
}

export default ProjectPane;
