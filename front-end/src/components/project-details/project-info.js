// packages
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// styling
import './project-info.scss';

const ProjectInfo = (props) => {
  const { error, loading, projectDetails } = props;
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
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
          {props.isVolunteer ? <button onClick={props.handleSignUp}>I want to work on this!</button> : null}
          {props.isBusiness ? <Link to='/project-edit'><button>Edit this project</button></Link> : null}
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
};

ProjectInfo.propTypes = {
  projectDetails: PropTypes.object,
  error: PropTypes.object,
  loading: PropTypes.bool,
  fetchProjectDetails: PropTypes.func,
};

export default ProjectInfo;
