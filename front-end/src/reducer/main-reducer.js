import { combineReducers } from 'redux';
import token from './token-reducer';
import latestProjects from './latest-projects-reducer';
import projectDetails from './project-details-reducer';

export default combineReducers({
  // token,
  latestProjects,
  projectDetails,
});
