import React, { Fragment } from 'react';
import './project-info.scss';

const ProjectInfo = (props) => {
  return (
    <Fragment>
      <div className='project-container'>
        <h2 className='project-name'>{props.projectName || 'Project Name'}</h2>
        <hr className='header-underline'/>
        <div className='project-desc'>
          <h4>Project Description:</h4>
          <p>{props.projectDesc || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit massa, lobortis at augue sit amet, faucibus pellentesque ante. Nunc sit amet euismod mauris, eu ornare eros. Quisque et quam ultricies, pretium enim eu, iaculis leo. Ut pellentesque mattis orci vel porta. '}</p>
        </div>
        {props.isBusiness ? <button>edit</button> : null}
      </div>
      <div className='business-container'>
        <h2 className='business-name'>{props.businessName || 'Business Name'}</h2>
        <hr className='header-underline'/>
        <div className='business-desc'>
          <h4>Business Description:</h4>
          <p>{props.businessDesc || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit massa, lobortis at augue sit amet, faucibus pellentesque ante. Nunc sit amet euismod mauris, eu ornare eros. Quisque et quam ultricies, pretium enim eu, iaculis leo. Ut pellentesque mattis orci vel porta. '}</p>
          <a href={props.businessLink} className='existing-site' rel="noopener noreferrer" target="_blank">{props.businessName || 'Link to existing site'}</a>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectInfo;
