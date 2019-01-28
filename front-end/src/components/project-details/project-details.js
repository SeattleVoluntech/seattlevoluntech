import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ProjectEditing from './project-editing';
import ProjectInfo from './project-info';
// import * as routes from '../../routes';

import './project-details.scss';

class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleClick() {
    this.setState({
      isEditing: true,
    });
  }

  handleSignUp() {
    // Post request
    return <Link to='/thank-you'>abc</Link>
  }

  render() {
    const { location } = this.props;
    return (
      <Fragment>
        <section className='project-details flex'>
          {this.props.isBusiness
            ? <span onClick={this.handleClick} className="editLink">edit</span>
            : null
          }
          {this.state.isEditing && this.props.isBusiness
            ? <ProjectEditing handleClick={this.handleClick}/>
            : <ProjectInfo isBusiness={true} handleSignUp={this.handleSignUp}/>
          }
        </section>
      </Fragment>
    );
  }
}

export default ProjectDetails;
