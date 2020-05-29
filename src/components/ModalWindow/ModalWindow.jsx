import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './ModalWindow.scss';

class ModalWindow extends Component {
  hide = () => {
    const { endModalSession } = this.props;
    endModalSession();
  }

  render() {
    const { root, status } = this.props;
    if (root.results && root.results[0]) {
      return (
        <div className={classNames(style.bord, status ? style.up : style.down)}>
          <iframe
            className={style.video}
            src={status ? `https://www.youtube.com/embed/${root.results[0].key}` : ''}
            title="trailer"
            frameBorder="0"
            allowFullScreen
          />
          <div className={style.bot__lain}>
            <button type="button" className={style.close__button} onClick={this.hide}>close</button>
          </div>
        </div>
      );
    }
    return (
      <div className={classNames(style.bord, status ? style.up : style.down)}>
        <span className={style.loading}>Cannot find trailer</span>
        <div className={style.bot__lain}>
          <button type="button" className={style.close__button} onClick={this.hide}>close</button>
        </div>
      </div>
    );
  }
}

ModalWindow.defaultProps = {
  status: false,
  root: {},
  endModalSession: () => 'can\'t find endModalSession function',
};

ModalWindow.propTypes = {
  status: PropTypes.bool,
  root: PropTypes.objectOf(PropTypes.any),
  endModalSession: PropTypes.func,
};

export default ModalWindow;
