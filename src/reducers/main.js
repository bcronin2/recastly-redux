import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

var defaultState = { currentVide: null, videoList: [] };

var rootReducer = function combination(state = defaultState, action) {
  return combineReducers({ currentVideo, videoList })(state, action);
};

export default rootReducer;
