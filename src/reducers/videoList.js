var videoListReducer = (state = [], action) => {
  var newState = state;
  if (action.type === 'CHANGE_VIDEO_LIST') {
    newState = action.videos;
  }
  return newState;
};

export default videoListReducer;
