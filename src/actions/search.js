import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = q => {
  return dispatch => {
    searchYouTube({ key: YOUTUBE_API_KEY, query: q }, results => {
      dispatch(changeVideo(results[0]));
      dispatch(changeVideoList(results));
    });
  };
};

export default handleVideoSearch;
