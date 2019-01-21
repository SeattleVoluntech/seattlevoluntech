import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavUi from '../nav-ui/nav-ui';
import ProjectEditing from './project-editing';
import ProjectInfo from './project-info';

import './project-details.scss';

class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
  }

  handleClick() {
    this.setState({
      isEditing: true,
    });
  }

  render() {
    const { location } = this.props;
    return (
      <Fragment>
        <section>
          <NavUi location={location} />
        </section>
        <section className='project-details'>
          {this.props.isBusiness
            ? <span onClick={this.handleClick} className="editLink">edit</span>
            : null
          }
          {this.state.isEditing && this.props.isBusiness
            ? <ProjectEditing handleClick={this.handleClick}/>
            : <ProjectInfo />
          }
          {/* Button on click needs functionality - must make some kind of POST request */}
          {this.props.isVolunteer ? <Link to='/thank-you'><button >I want to work on this!</button></Link> : null}
        </section>
      </Fragment>
    );
  }
}

export default ProjectDetails;
