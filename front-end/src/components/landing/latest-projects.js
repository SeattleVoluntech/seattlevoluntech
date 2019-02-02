// packages
import React from 'react';
import ProjectCard from '../open-projects/project-card';

// styles
import './latest-projects.scss';

class LatestProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
  }

  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  componentDidMount() {
    fetch('http://localhost:8080/projects/latest')
      .then((response) => {
        this.handleErrors(response);
        const clone = response.clone();
        return clone.json();
      }).then((data) => {
        const truncatedData = this.truncate(data);
        this.setState({ projects: truncatedData });
      }).catch((err) => {
        alert(err);
      });
  }
  // truncate project description on project card to display up to 150 characters

  truncate(data) {
    data.map((olddata) => {
      const newData = olddata.projectHeadline = olddata.projectDescription.split('').slice(0, olddata.projectDescription.lastIndexOf(' ', 150)).join('').concat(' ...');
      return newData;
    });
    return data;
  }

  render() {
    return (
        <div id='latest-projects' className='latest-projects-container'>
            <h2>Latest Projects</h2>
            <hr className="underline"/>
            <div className='latest-projects flex'>
                {this.state.projects.map((project, i) => <ProjectCard
                    currentProject={project}
                    key={i}
                    className='main-project'
                />)}
            </div>
        </div>
    );
  }
}

export default LatestProjects;
