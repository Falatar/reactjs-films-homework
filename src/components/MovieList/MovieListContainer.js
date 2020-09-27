import { connect } from 'react-redux';
import {
  loadActualFilms,
  loadGenres,
  setNewMode,
  setActualGenre,
  switchPage,
  updateActualView,
  startSearch,
  saveSearchStr,
} from '../../modules/filmListModule/filmListModuleActions';
import { getMoviesInfo, getSearchResult } from '../../modules/filmListModule/filmListModuleSelector';
import MovieList from './MovieList';

export const mapStateToProps = (store) => ({
  filmList: getMoviesInfo(store),
  searchResult: getSearchResult(store),
});

export const mapDispatchToProps = (dispatch) => ({
  getFilmList: () => dispatch(loadActualFilms()),
  loadGenreList: () => dispatch(loadGenres()),
  switchMode: (value) => dispatch(setNewMode(value)),
  switchGenre: (value) => dispatch(setActualGenre(value)),
  switchPage: (value) => dispatch(switchPage(value)),
  updateActualView: (value) => dispatch(updateActualView(value)),
  search: (searchString) => dispatch(startSearch(searchString)),
  saveSearchStr: (searchString) => dispatch(saveSearchStr(searchString)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieList);
