import { connect } from 'react-redux';
import showTrailer, { updatePath } from './actions';
import FilmData from './FilmData';


const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(showTrailer()),
  setTrailer: (path) => dispatch(updatePath(path)),
});

export default connect(
  null,
  mapDispatchToProps,
)(FilmData);
