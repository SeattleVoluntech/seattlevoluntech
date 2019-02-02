export const GET_PROJECT_DETAILS_BEGIN = 'GET_PROJECT_DETAILS_BEGIN';
export const GET_PROJECT_DETAILS_SUCCESS = 'GET_PROJECT_DETAILS_SUCCESS';
export const GET_PROJECT_DETAILS_FAILURE = 'GET_PROJECT_DETAILS_FAILURE';

export const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

// load landing page, send GET request to get latestProjects

export const getProjectDetailsBegin = () => ({
  type: GET_PROJECT_DETAILS_BEGIN,
});

export const getProjectDetailsSuccess = projectDetail => ({
  type: GET_PROJECT_DETAILS_SUCCESS,
  payload: projectDetail,
});

export const getProjectDetailsFailure = error => ({
  type: GET_PROJECT_DETAILS_BEGIN,
  payload: { error },
});

export const getProjectDetails = () => {
  return (dispatch) => {
    return fetch('http://localhost:8080/projects/')
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

export const fetchProjectDetails = () => {
  return (dispatch) => {
    dispatch(getProjectDetailsBegin());
    dispatch(getProjectDetails())
      .then((json) => {
        dispatch(getProjectDetailsSuccess(json));
        return json;
      })
      .catch((error) => {
        dispatch(getProjectDetailsFailure(error));
      });
  };
};
