import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../routes';
import './project-card.scss';

const ProjectCard = (props) => {
  console.log(props);
  return (
    <div className={`aProject flex ${props.className}`}>
      { /* <div className="card-top"> */ }
        <div className='card-vertical-line' />
        <Link to={`/projects/` + props.currentProject.id} className={'flex'} id={props.currentProject.id}>
          <h2>{props.currentProject.projectName}</h2>
          <h3>{props.currentProject.businessName}</h3>
          <h4>{props.currentProject.projectHeadline}</h4>
          <p>Read more</p>
        </Link>
      {/*</div>*/}
    </div>
  );
};

export default ProjectCard;
