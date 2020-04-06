import { connect } from 'react-redux';
import setFilmAction, { loadGenres } from './actions';
import MoviewList from './MoviewList';

const mapStateToProps = (store) => ({
  base: store.moviewReducer.base,
  genList: store.moviewReducer.genList,
});

const mapDispatchToProps = (dispatch) => ({
  setFilm: () => dispatch(setFilmAction()),
  loadList: () => dispatch(loadGenres()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviewList);
