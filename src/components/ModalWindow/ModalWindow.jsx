import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './ModalWindow.scss';

class ModalWindow extends Component {
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
    return (
      <div className={classNames(style.Bord, isShowed ? style.Up : style.Down)}>
        <iframe
          className={style.Video}
          src={isShowed ? `https://www.youtube.com/embed/${root.results[0].key}` : ''}
          title="trailer"
          frameBorder="0"
          allowFullScreen
        />
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

export default ModalWindow;
