export default store => next => (action) => {
  try {
    console.log('__ACTION__', action);
    const result = next(action);
    console.log('__NEW STATE__', store.getState());
    return result;
  } catch (error) {
    console.log('__ERROR__', error);
    action.error = error;
    return action;
  }
};
