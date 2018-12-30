const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'TOKEN_SET':
      // Token was being assigned as the DOM in a string...
      // Below if handles if API_URL is missing to prevent auto login.
      if (payload.includes('<\!DOCTYPE html>')) { // eslint-disable-line no-useless-escape
        return null;
      } // else
      return payload;
    default:
      return state;
  }
};
