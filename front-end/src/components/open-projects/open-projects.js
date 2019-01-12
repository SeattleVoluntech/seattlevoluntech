import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ProjectPane from './project-pane';
import NavUi from '../nav-ui/nav-ui';

import './open-projects.scss';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  projectsList() {
    return <div className="projects">
      <h2 className="projectListHeader">Projects</h2>
    </div>;
  }

  render() {
    const { location } = this.props;
    return (
      <Fragment>
        <section>
          <NavUi location={location} />
        </section>
        <section>
          {this.projectsList()}
        </section>
        <ProjectPane/>
      </Fragment>
    );
  }
}

Projects.propTypes = {
  location: PropTypes.object,
};

export default Projects;
