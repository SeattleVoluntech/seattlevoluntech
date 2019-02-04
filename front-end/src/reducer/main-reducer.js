import { combineReducers } from 'redux';
import token from './token-reducer';
import latestProjects from './latest-projects-reducer';
import projectDetails from './project-details-reducer';
import profileForm from './profile-edit-reducer';
import currentUserInfo from './get-currentuser-info-reducer';
import allProjects from './all-projects-reducer';

export default combineReducers({
  // token,
  latestProjects,
  projectDetails,
  profileForm,
  currentUserInfo,
  allProjects,
});
