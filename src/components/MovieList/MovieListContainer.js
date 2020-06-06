import { connect } from 'react-redux';
import { loadActualFilms, loadGenres } from '../../modules/filmListModule/filmListModuleActions';
import { getMoviesInfo, getSearchResult } from '../../modules/filmListModule/filmListModuleSelector';
import MovieList from './MovieList';

export const mapStateToProps = (store) => ({
  filmList: getMoviesInfo(store),
  searchResult: getSearchResult(store),
});

export const mapDispatchToProps = (dispatch) => ({
  getFilmList: () => dispatch(loadActualFilms()),
  loadGenreList: () => dispatch(loadGenres()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieList);
