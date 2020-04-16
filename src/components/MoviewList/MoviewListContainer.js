import { connect } from 'react-redux';
import { loadActualFilms, loadGenres } from '../../modules/filmListModule/filmListModuleActions';
import getMoviesInfo, { getGenres, genGenreString } from '../../modules/filmListModule/filmListModuleSelector';
import MoviewList from './MoviewList';

const mapStateToProps = (store) => ({
  genGenreString,
  base: getMoviesInfo(store),
  genList: getGenres(store),
});

const mapDispatchToProps = (dispatch) => ({
  getFilmList: () => dispatch(loadActualFilms()),
  loadGenreList: () => dispatch(loadGenres()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviewList);
