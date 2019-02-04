// packages
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as routes from '../../routes';

// styling
import './project-info.scss';

class ProjectInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: false,
    };
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp() {
    // Post request
    this.setState({ signUp: true });
  }

  render() {
    const { error, loading, projectDetails } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    if (this.state.signUp) {
      return <Redirect to={routes.THANK_YOU_FRONTEND}/>;
    }
    return (
      <div className='project-info flex'>
        <div className='project-wrapper'>
          <h2 className='project-name'>{projectDetails.projectName}</h2>
          <hr className='header-underline'/>
          <div className='project-desc'>
            <h4>Project Description:</h4>
            <p>{projectDetails.projectDescription}</p>
          </div>
          <div className='project-buttons flex'>
            {this.props.isVolunteer ? <button onClick={this.handleSignUp}>
            I want to work on this!</button> : null}
            {this.props.isBusiness ? <Link to='/project-edit'><button>Edit this project</button></Link> : null}
          </div>
        </div>
        <div className='business-wrapper'>
          <h2 className='business-name'>{projectDetails.businessName}</h2>
          <hr className='header-underline'/>
          <div className='business-desc'>
            <h4>Business Description:</h4>
            <p>{projectDetails.businessDescription}</p>
            <a href={projectDetails.lastName} className='existing-site' rel="noopener noreferrer" target="_blank">{'Link to existing site'}</a>
          </div>
        </div>
      </div>
    );
  }
}

ProjectInfo.propTypes = {
  projectDetails: PropTypes.object,
  error: PropTypes.object,
  loading: PropTypes.bool,
  fetchProjectDetails: PropTypes.func,
  isBusiness: PropTypes.bool,
  isVolunteer: PropTypes.bool,
};

export default ProjectInfo;
