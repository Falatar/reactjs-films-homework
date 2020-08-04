import { connect } from 'react-redux';
import { updateTrailerPath, openModal } from '../../modules/singleFilmModule/singleFilmModuleActions';
import FilmList from './FilmList';


export const mapDispatchToProps = (dispatch) => ({
  callTrailer: () => dispatch(openModal()),
  setTrailer: (path) => dispatch(updateTrailerPath(path)),
});

export default connect(
  null,
  mapDispatchToProps,
)(FilmList);
