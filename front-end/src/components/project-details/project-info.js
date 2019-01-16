import React, { Fragment } from 'react';

function ProjectInfo(props) {
  return (
    <Fragment>
      <h2>{props.projectName || 'Project Name'}</h2>
      <h3>{props.businessName || 'Business Name'}</h3>
      <h4>Busines Description:</h4>
      <p>{props.businessDesc || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit massa, lobortis at augue sit amet, faucibus pellentesque ante. Nunc sit amet euismod mauris, eu ornare eros. Quisque et quam ultricies, pretium enim eu, iaculis leo. Ut pellentesque mattis orci vel porta. '}</p>
      <a href={props.businessLink} rel="noopener noreferrer" target="_blank">{props.businessName || 'link to existing site'}</a>
      <h4>Project Description:</h4>
      <p>{props.projectDesc || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit massa, lobortis at augue sit amet, faucibus pellentesque ante. Nunc sit amet euismod mauris, eu ornare eros. Quisque et quam ultricies, pretium enim eu, iaculis leo. Ut pellentesque mattis orci vel porta. '}</p>
      {props.isBusiness ? <button>edit</button> : null}
    </Fragment>    
  );
}

export default ProjectInfo;
