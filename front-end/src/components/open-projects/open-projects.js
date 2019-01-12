import React, { Fragment } from 'react';

import NavUi from '../nav-ui/nav-ui';

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
          <p>HELLLLLLLLO</p>
        </section>
      </Fragment>
    );
  }
}

export default Projects;
