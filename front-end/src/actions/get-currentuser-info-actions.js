export const GET_CURRENTUSER_INFO_BEGIN = 'GET_CURRENTUSER_INFO_BEGIN';
export const GET_CURRENTUSER_INFO_SUCCESS = 'GET_CURRENTUSER_INFO_SUCCESS';
export const GET_CURRENTUSER_INFO_FAILURE = 'GET_CURRENTUSER_INFO_FAILURE';

export const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const getCurrentUserInfoBegin = () => ({
  type: GET_CURRENTUSER_INFO_BEGIN,
});

export const getCurrentUserInfoSuccess = userInfo => ({
  type: GET_CURRENTUSER_INFO_SUCCESS,
  payload: userInfo,
});

export const getCurrentUserInfoFailure = error => ({
  type: GET_CURRENTUSER_INFO_FAILURE,
  payload: { error },
});

export const getCurrentUserInfo = () => {
  return (dispatch) => {
    return fetch('http://localhost:8080/currentUser')
      .then(handleErrors)
      .then((response) => {
        return response.json();
      }).then((data) => {
        return data;
      })
      .catch((error) => {
        dispatch(getCurrentUserInfoFailure(error));
      });
  };
};

export const fetchCurrentUserInfo = (id) => {
  return (dispatch) => {
    dispatch(getCurrentUserInfoBegin());
    dispatch(getCurrentUserInfo(id))
      .then((json) => {
        dispatch(getCurrentUserInfoSuccess(json));
        return json;
      })
      .catch((error) => {
        dispatch(getCurrentUserInfoFailure(error));
      });
  };
};
