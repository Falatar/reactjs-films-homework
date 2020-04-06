import { connect } from 'react-redux';
import endSession from './actions';
import ModalWindow from './ModalWindow';

const mapStateToProps = (store) => ({
  status: store.modalReducer.status,
  root: store.modalReducer.root,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(endSession()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalWindow);
