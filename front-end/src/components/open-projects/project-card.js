import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../routes';
import './project-card.scss';

const ProjectCard = (props) => {
  return (
    <div className="aProject">
      { /* <div className="card-top"> */ }
        <Link to={routes.PROJECT_DETAILS_FRONTEND} >
          <h2>Project Name</h2>
          <h3>Project Sponsor</h3>
          <h4>Project Headline</h4>
        </Link>
      {/*</div>*/}
    </div>
  );
};

export default ProjectCard;
