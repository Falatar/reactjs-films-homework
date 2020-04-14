import { connect } from 'react-redux';
import loadTopFilm, { loadGenres } from '../../modules/filmListModule/filmListModuleActions';
import { getTopFilm, getGenres } from '../../modules/filmListModule/filmListModuleSelector';
import Header from './Header';

const mapStateToProps = (store) => ({
  mostPopularFilm: getTopFilm(store),
  genList: getGenres(store),
});

const mapDispatchToProps = (dispatch) => ({
  LoadMostPopularFilm: () => dispatch(loadTopFilm()),
  LoadGenreList: () => dispatch(loadGenres()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
