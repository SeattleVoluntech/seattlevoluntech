import {
  GET_LATEST_PROJECTS_BEGIN,
  GET_LATEST_PROJECTS_SUCCESS,
  GET_LATEST_PROJECTS_FAILURE,
} from '../actions/latest-projects-actions';

const initialState = {
  latestProjects: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LATEST_PROJECTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_LATEST_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        latestProjects: action.payload,
      };

    case GET_LATEST_PROJECTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        latestProjects: [],
      };

    default:
      return state;
  }
};
