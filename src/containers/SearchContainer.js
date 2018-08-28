import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

var mapDispatchToProps = dispatch => {
  return {
    handleSearchInputChange: q => {
      dispatch(handleSearchChange(q));
    }
  };
};

var SearchContainer = connect(
  null,
  mapDispatchToProps
)(Search);

export default SearchContainer;
