var currentVideoReducer = (state = null, action) => {
  var newState = state;
  if (action.type === 'CHANGE_VIDEO') {
    newState = action.video;
  }
  return newState;
};

export default currentVideoReducer;
