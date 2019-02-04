export const PUT_PROFILE_FORM_BEGIN = 'PUT_PROFILE_FORM_BEGIN';
export const PUT_PROFILE_FORM_SUCCESS = 'PUT_PROFILE_FORM_SUCCESS';
export const PUT_PROFILE_FORM_FAILURE = 'PUT_PROFILE_FORM_FAILURE';

export const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const putProfileFormBegin = () => ({
  type: PUT_PROFILE_FORM_BEGIN,
});

export const putProfileFormSuccess = profileForm => ({
  type: PUT_PROFILE_FORM_SUCCESS,
  payload: profileForm,
});

export const putProfileFormFailure = error => ({
  type: PUT_PROFILE_FORM_FAILURE,
  payload: { error },
});

export const sendProfileForm = (formData) => {
  return (dispatch) => {
    return fetch('http://localhost:8080/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: formData,
    })
      .then(handleErrors)
      .then((response) => {
        return response.json();
      }).then((data) => {
        return data;
      })
      .catch((error) => {
        dispatch(putProfileFormFailure(error));
      });
  };
};

export const putProfileForm = () => {
  return (dispatch) => {
    dispatch(putProfileFormBegin());
    dispatch(sendProfileForm())
      .then((json) => {
        dispatch(putProfileFormSuccess(json));
        return json;
      })
      .catch((error) => {
        dispatch(putProfileFormFailure(error));
      });
  };
};
