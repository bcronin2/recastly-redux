import Redux from 'redux';

const defaultState = null;

var currentVideoReducer = (state = defaultState, action) => {
  if (action.type === 'CHANGE_VIDEO') {
    state = action.video;
  }
  return state;
};

export default currentVideoReducer;
