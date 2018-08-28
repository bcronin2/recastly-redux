import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = q => {
  return dispatch => {
    searchYouTube({ key: YOUTUBE_API_KEY }, results => {
      dispatch(changeVideo(results.items[0]));
      dispatch(changeVideoList(results.items));
    });
  };
};

export default handleVideoSearch;
