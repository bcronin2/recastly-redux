import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var mapStateToProps = state => {
  return {
    video: state.currentVideo
  };
};

var VideoPlayerContainer = connect(
  mapStateToProps,
  null
)(VideoPlayer);

export default VideoPlayerContainer;
