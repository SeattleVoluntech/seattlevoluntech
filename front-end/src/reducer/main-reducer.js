import { combineReducers } from 'redux';
import token from './token-reducer';
import latestProjects from './latest-projects-reducer';

export default combineReducers({
  // token,
  latestProjects,
});
