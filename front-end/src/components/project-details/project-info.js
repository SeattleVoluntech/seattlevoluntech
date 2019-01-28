import React from 'react';
import Link from 'react-router';
import './project-info.scss';

const ProjectInfo = (props) => {
  console.log(props);
  return (
    <div className='project-info flex'>
      <div className='project-wrapper'>
        <h2 className='project-name'>{props.projectName || 'Project Name'}</h2>
        <hr className='header-underline'/>
        <div className='project-desc'>
          <h4>Project Description:</h4>
          <p>{props.projectDesc || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit massa, lobortis at augue sit amet, faucibus pellentesque ante. Nunc sit amet euismod mauris, eu ornare eros. Quisque et quam ultricies, pretium enim eu, iaculis leo. Ut pellentesque mattis orci vel porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit massa, lobortis at augue sit amet, faucibus pellentesque ante. Nunc sit amet euismod mauris, eu ornare eros. Quisque et quam ultricies, pretium enim eu, iaculis leo. Ut pellentesque mattis orci vel porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit massa, lobortis at augue sit amet, faucibus pellentesque ante. Nunc sit amet euismod mauris, eu ornare eros. Quisque et quam ultricies, pretium enim eu, iaculis leo. Ut pellentesque mattis orci vel porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit massa, lobortis at augue sit amet, faucibus pellentesque ante. Nunc'}</p>
        </div>
        <div className='project-buttons flex'>
          {props.isBusiness ? <button onClick={props.handleSignUp}>I want to work on this!</button> : null}
          {props.isVolunteer ? <Link to='/project-edit'><button>Edit this project</button></Link> : null}
        </div>
      </div>
      <div className='business-wrapper'>
        <h2 className='business-name'>{props.businessName || 'Business Name'}</h2>
        <hr className='header-underline'/>
        <div className='business-desc'>
          <h4>Business Description:</h4>
          <p>{props.businessDesc || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit massa, lobortis at augue sit amet, faucibus pellentesque ante. Nunc sit amet euismod mauris, eu ornare eros. Quisque et quam ultricies, pretium enim eu, iaculis leo. Ut pellentesque mattis orci vel porta. '}</p>
          <a href={props.businessSite} className='existing-site' rel="noopener noreferrer" target="_blank">{props.businessName || 'Link to existing site'}</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
