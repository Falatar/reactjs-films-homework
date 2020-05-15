import { connect } from 'react-redux';
import { closeModal } from '../../modules/singleFilmModule/singleFilmModuleActions';
import { isModalActive, getVideoLink } from '../../modules/singleFilmModule/singleFilmModuleSelector';
import ModalWindow from './ModalWindow';

export const mapStateToProps = (store) => ({
  status: isModalActive(store),
  root: getVideoLink(store),
});

export const mapDispatchToProps = (dispatch) => ({
  endModalSession: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalWindow);
