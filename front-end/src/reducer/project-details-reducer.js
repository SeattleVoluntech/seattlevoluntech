import {
  GET_PROJECT_DETAILS_BEGIN,
  GET_PROJECT_DETAILS_SUCCESS,
  GET_PROJECT_DETAILS_FAILURE,
} from '../actions/project-details-actions';

const initialState = {
  projectDetails: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT_DETAILS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_PROJECT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        projectDetails: action.payload,
      };

    case GET_PROJECT_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        projectDetails: [],
      };

    default:
      return state;
  }
};
