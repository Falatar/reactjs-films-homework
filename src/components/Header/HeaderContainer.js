import { connect } from 'react-redux';
import { loadTopFilm, loadGenres } from '../../modules/filmListModule/filmListModuleActions';
import {
  getTopFilm,
} from '../../modules/filmListModule/filmListModuleSelector';
import Header from './Header';

export const mapStateToProps = (store) => ({
  mostPopularFilm: getTopFilm(store),
});

export const mapDispatchToProps = (dispatch) => ({
  LoadMostPopularFilm: () => dispatch(loadTopFilm()),
  LoadGenreList: () => dispatch(loadGenres()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
