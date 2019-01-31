import React from 'react';
import ProjectCard from './project-card';
import './project-pane.scss';

class ProjectPane extends React.Component {
  render() {
    return (
      <div className="projectPane">
        <ProjectCard className="aProject" />
        <ProjectCard className="aProject" />
        <ProjectCard className="aProject" />
        <ProjectCard className="aProject" />
        <ProjectCard className="aProject" />
        <ProjectCard className="aProject" />
      </div>
    );
  }
}

export default ProjectPane;
