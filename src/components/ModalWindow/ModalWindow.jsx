import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './ModalWindow.scss';
import endSession from './actions';

class ModalWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowed: false,
    };
  }

  show = () => {
    this.setState((state) => ({
      isShowed: !state.isShowed,
    }));
  }

  hide = () => {
    const { closeModal } = this.props;
    closeModal();
  }

  render() {
    const { status, root } = this.props;
    const { isShowed } = this.state;
    if (status && root.results !== undefined) this.show();
    return (
      <div className={classNames(style.Bord, isShowed ? style.Up : style.Down)}>
        <iframe src={isShowed ? `https://www.youtube.com/watch?v=${root.results[0].key}` : ''} title="trailer" />
        <div className={style.BotLain}>
          <button type="button" className={style.CloseButton} onClick={this.hide}>close</button>
        </div>
      </div>
    );
  }
}

ModalWindow.defaultProps = {
  status: false,
  root: {},
  closeModal: () => {},
};

ModalWindow.propTypes = {
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
)(ModalWindow);
