import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import endSession from './actions';
import ModalWindow from './ModalWindow';

class ModalWindowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowed: false,
    };
  }

  componentDidUpdate() {
    const { status, root } = this.props;
    const { isShowed } = this.state;
    if (status && root.results !== undefined && !isShowed) this.show();
  }

  show = () => {
    this.setState((state) => ({
      isShowed: !state.isShowed,
    }));
  }

  hide = () => {
    const { closeModal } = this.props;
    closeModal();
    this.setState((state) => ({
      isShowed: !state.isShowed,
    }));
  }

  render() {
    const { root } = this.props;
    const { isShowed } = this.state;
    return ModalWindow(isShowed, root, this.hide);
  }
}

ModalWindowContainer.defaultProps = {
  status: false,
  root: {},
  closeModal: () => {},
};

ModalWindowContainer.propTypes = {
  status: PropTypes.bool,
  root: PropTypes.objectOf(PropTypes.any),
  closeModal: PropTypes.func,
};

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
)(ModalWindowContainer);
