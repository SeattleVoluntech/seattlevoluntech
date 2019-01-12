import React, { Fragments } from 'react';
import NavUi from '../nav-ui/nav-ui';
import ProjectEditing from './project-editing';
import ProjectInfo from './project-info';
import { Link } from 'react-router-dom';

class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,

    };
  }

  render() {
    const { location } = this.props;
    return (
      <Fragments>
        <section>
          <NavUi location={location} />
        </section>
        <section>
          {this.props.isBusiness 
            ? <span onClick={this.handleClick} className="editLink">edit</span> 
            : null 
          }
          {this.state.isEditing && this.props.isBusiness 
            ? <ProjectEditing/>
            : <ProjectInfo />
          }
          {this.props.isVolunteer ? <Link to='/thank-you'><button >I want to work on this!</button></Link> : null}
        </section>
      </Fragments>
    );
  }
}

export default ProjectDetails;
