import { combineReducers } from 'redux';
import token from './token-reducer';
import latestProjects from './latest-projects-reducer';
import projectDetails from './project-details-reducer';
import currentUserInfo from './get-currentuser-info-reducer';

export default combineReducers({
  // token,
  latestProjects,
  projectDetails,
  currentUserInfo,
});
