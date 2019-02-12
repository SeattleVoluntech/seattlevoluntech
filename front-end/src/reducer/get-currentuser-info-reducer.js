import {
  GET_CURRENTUSER_INFO_BEGIN,
  GET_CURRENTUSER_INFO_SUCCESS,
  GET_CURRENTUSER_INFO_FAILURE,
} from '../actions/get-currentuser-info-actions';

const initialState = {
  currentUserInfo: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENTUSER_INFO_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_CURRENTUSER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUserInfo: action.payload,
      };

    case GET_CURRENTUSER_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        currentUserInfo: [],
      };

    default:
      return state;
  }
};
