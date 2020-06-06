import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './Info.scss';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textVisible: false,
    };
  }

  switchMode = () => {
    this.setState((state) => ({
      textVisible: !state.textVisible,
    }));
  }

  callModal = () => {
    const { callTrailer, setTrailer, id } = this.props;
    setTrailer(id);
    callTrailer();
  }

  render() {
    const { overview } = this.props;
    const { textVisible } = this.state;
    return (
      <div
        className={
          textVisible
            ? classNames(style.info, style.shadow)
            : classNames(style.info, style.sheer)
        }
      >
        <p
          className={
            textVisible
              ? classNames(style.text, style.visible)
              : classNames(style.text, style.unvisible)
          }
        >
          {overview}
        </p>
        <div className={style.buttons}>
          <button type="button" id="watch" className={style.watch} onClick={this.callModal}>Watch now</button>
          <button type="button" id="check" className={style.view} onClick={this.switchMode}>View info</button>
        </div>
      </div>
    );
  }
}

Info.defaultProps = {
  overview: '',
  id: 0,
  callTrailer: () => 'can\'t find callTrailer function',
  setTrailer: () => 'can\'t find setTrailer function',
};

Info.propTypes = {
  overview: PropTypes.string,
  id: PropTypes.number,
  callTrailer: PropTypes.func,
  setTrailer: PropTypes.func,
};

export default Info;
