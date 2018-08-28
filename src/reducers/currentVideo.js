var currentVideoReducer = (state = null, action) => {
  if (action.type === 'CHANGE_VIDEO') {
    state = action.video;
  }
  return state;
};

export default currentVideoReducer;
