import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './ScrollPanel.scss';

class ScrollPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualPage: 1,
    };
  }

  changePageToFixed = (event) => {
    const {
      totalPages, scroll,
    } = this.props;
    if (event.target.value >= 1 && event.target.value <= totalPages) {
      this.setState({ actualPage: event.target.value });
      scroll(event.target.value);
    }
  }

  GoLeft = () => {
    const {
      totalPages, scroll,
    } = this.props;
    const {
      actualPage,
    } = this.state;
    if (actualPage - 1 >= 1 && actualPage - 1 <= totalPages) {
      this.setState({ actualPage: actualPage - 1 });
      scroll(actualPage - 1);
    }
  }

  GoRight = () => {
    const {
      totalPages, scroll,
    } = this.props;
    const {
      actualPage,
    } = this.state;
    if (actualPage + 1 >= 1 && actualPage + 1 <= totalPages) {
      this.setState({ actualPage: actualPage + 1 });
      scroll(actualPage + 1);
    }
  }

  GoLeftToEnd = () => {
    const {
      scroll,
    } = this.props;
    const {
      actualPage,
    } = this.state;
    if (actualPage !== 1) {
      this.setState({ actualPage: 1 });
      scroll(1);
    }
  }

  GoRightToEnd = () => {
    const {
      totalPages, scroll,
    } = this.props;
    const {
      actualPage,
    } = this.state;
    if (actualPage !== totalPages) {
      this.setState({ actualPage: totalPages });
      scroll(totalPages);
    }
  }

  render() {
    const {
      actualPage,
    } = this.state;
    return (
      <div className={style.scroll__panel}>
        <button
          type="button"
          className={style.scroll__left__to__end}
          onClick={this.GoLeftToEnd}
        >
        ⭰
        </button>
        <button
          type="button"
          className={style.scroll__left}
          onClick={this.GoLeft}
        >
        🠔
        </button>
        <input
          type="text"
          value={actualPage}
          className={style.scroll__to__certain__page}
          onKeyPress={this.changePageToFixed}
        />
        <button
          type="button"
          className={style.scroll__right}
          onClick={this.GoRight}
        >
        🠖
        </button>
        <button
          type="button"
          className={style.scroll__right__to__end}
          onClick={this.GoRightToEnd}
        >
        ⭲
        </button>
      </div>
    );
  }
}

ScrollPanel.defaultProps = {
  totalPages: 1,
  scroll: () => {},
};

ScrollPanel.propTypes = {
  totalPages: PropTypes.number,
  scroll: PropTypes.func,
};

export default ScrollPanel;
