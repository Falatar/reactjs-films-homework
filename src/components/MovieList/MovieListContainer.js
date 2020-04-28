import { connect } from 'react-redux';
import { loadActualFilms, loadGenres } from '../../modules/filmListModule/filmListModuleActions';
import getMoviesInfo, {
  getGenres,
} from '../../modules/filmListModule/filmListModuleSelector';
import MovieList from './MovieList';

const mapStateToProps = (store) => ({
  filmList: getMoviesInfo(store),
  genList: getGenres(store),
});

const mapDispatchToProps = (dispatch) => ({
  getFilmList: () => dispatch(loadActualFilms()),
  loadGenreList: () => dispatch(loadGenres()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieList);
