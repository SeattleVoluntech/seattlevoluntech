import {
  GET_ALL_PROJECTS_BEGIN,
  GET_ALL_PROJECTS_SUCCESS,
  GET_ALL_PROJECTS_FAILURE,
} from '../actions/get-all-projects-actions';

const initialState = {
  allProjects: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROJECTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_ALL_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        allProjects: action.payload,
      };

    case GET_ALL_PROJECTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        allProjects: [],
      };

    default:
      return state;
  }
};
