import {
  PUT_PROFILE_FORM_BEGIN,
  PUT_PROFILE_FORM_SUCCESS,
  PUT_PROFILE_FORM_FAILURE,
} from '../actions/profile-edit-actions';

const initialState = {
  profileForm: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PUT_PROFILE_FORM_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case PUT_PROFILE_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        profileForm: action.payload,
      };

    case PUT_PROFILE_FORM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        profileForm: [],
      };

    default:
      return state;
  }
};
