export const GET_ALL_PROJECTS_BEGIN = 'GET_ALL_PROJECTS_BEGIN';
export const GET_ALL_PROJECTS_SUCCESS = 'GET_ALL_PROJECTS_SUCCESS';
export const GET_ALL_PROJECTS_FAILURE = 'GET_ALL_PROJECTS_FAILURE';

export const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

// load landing page, send GET request to get latestProjects

export const getAllProjectsBegin = () => ({
  type: GET_ALL_PROJECTS_BEGIN,
});

export const getAllProjectsSuccess = projects => ({
  type: GET_ALL_PROJECTS_SUCCESS,
  payload: projects,
});

export const getAllProjectsFailure = error => ({
  type: GET_ALL_PROJECTS_BEGIN,
  payload: { error },
});

export const getAllProjects = () => {
  return (dispatch) => {
    return fetch('http://localhost:8080/projects/')
      .then(handleErrors)
      .then((response) => {
        return response.json();
      }).then((data) => {
        return data;
      })
      .catch((error) => {
        dispatch(getAllProjectsFailure(error));
      });
  };
};

export const fetchAllProjects = () => {
  return (dispatch) => {
    dispatch(getAllProjectsBegin());
    dispatch(getAllProjects())
      .then((json) => {
        json.map((data) => {
          data.projectHeadline = data.projectDescription.split('').slice(0, data.projectDescription.lastIndexOf(' ', 100)).join('').concat(' ...');
          return data;
        });
        dispatch(getAllProjectsSuccess(json));
        return json;
      })
      .catch((error) => {
        dispatch(getAllProjectsFailure(error));
      });
  };
};
