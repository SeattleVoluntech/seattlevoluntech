export const GET_PROJECT_DETAILS_BEGIN = 'GET_PROJECT_DETAILS_BEGIN';
export const GET_PROJECT_DETAILS_SUCCESS = 'GET_PROJECT_DETAILS_SUCCESS';
export const GET_PROJECT_DETAILS_FAILURE = 'GET_PROJECT_DETAILS_FAILURE';

export const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const getProjectDetailsBegin = () => ({
  type: GET_PROJECT_DETAILS_BEGIN,
});

export const getProjectDetailsSuccess = projectDetail => ({
  type: GET_PROJECT_DETAILS_SUCCESS,
  payload: projectDetail,
});

export const getProjectDetailsFailure = error => ({
  type: GET_PROJECT_DETAILS_FAILURE,
  payload: { error },
});

export const getProjectDetails = (id) => {
  return (dispatch) => {
    return fetch(`http://localhost:8080/projects/${id}`)
      .then(handleErrors)
      .then((response) => {
        return response.json();
      }).then((data) => {
        return data;
      })
      .catch((error) => {
        dispatch(getProjectDetailsFailure(error));
      });
  };
};

export const fetchProjectDetails = (id) => {
  return (dispatch) => {
    dispatch(getProjectDetailsBegin());
    dispatch(getProjectDetails(id))
      .then((json) => {
        dispatch(getProjectDetailsSuccess(json));
        return json;
      })
      .catch((error) => {
        dispatch(getProjectDetailsFailure(error));
      });
  };
};
