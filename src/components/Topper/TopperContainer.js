import { connect } from 'react-redux';
import getFilm, { loadGenres } from './actions';
import Topper from './Topper';

const mapStateToProps = (store) => ({
  latestFilm: store.topperReducer.latestFilm,
  genList: store.topperReducer.genList,
});

const mapDispatchToProps = (dispatch) => ({
  loadLatest: () => dispatch(getFilm()),
  loadList: () => dispatch(loadGenres()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Topper);
