export const GET_LATEST_PROJECTS_BEGIN = 'GET_LATEST_PROJECTS_BEGIN';
export const GET_LATEST_PROJECTS_SUCCESS = 'GET_LATEST_PROJECTS_SUCCESS';
export const GET_LATEST_PROJECTS_FAILURE = 'GET_LATEST_PROJECTS_FAILURE';

export const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

// load landing page, send GET request to get latestProjects

export const getLatestProjectsBegin = () => ({
  type: GET_LATEST_PROJECTS_BEGIN,
});

export const getLatestProjectsSuccess = projects => ({
  type: GET_LATEST_PROJECTS_SUCCESS,
  payload: projects,
});

export const getLatestProjectsFailure = error => ({
  type: GET_LATEST_PROJECTS_BEGIN,
  payload: { error },
});

export const getLatestProjects = () => {
  return (dispatch) => {
    return fetch('http://localhost:8080/projects/latest')
      .then(handleErrors)
      .then((response) => {
        console.log('response', response);
        return response.json();
      }).then((data) => {
        return data;
      })
      .catch((error) => {
        console.log('here');
        dispatch(getLatestProjectsFailure(error));
      });
  };
};

export const fetchLatestProjects = () => {
  return (dispatch) => {
    dispatch(getLatestProjectsBegin());
    dispatch(getLatestProjects())
      .then((json) => {
        json.map((data) => {
          data.projectHeadline = data.projectDescription.split('').slice(0, data.projectDescription.lastIndexOf(' ', 100)).join('').concat(' ...');
          return data;
        });
        dispatch(getLatestProjectsSuccess(json));
        return json;
      })
      .catch((error) => {
        dispatch(getLatestProjectsFailure(error));
      });
  };
};
