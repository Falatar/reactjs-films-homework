import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './PaginationPanel.scss';

class PaginationPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualPage: 1,
    };
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
      <div className={style.pagination__panel}>
        <button
          type="button"
          className={style.pagination__left__to__end}
          onClick={this.GoLeftToEnd}
        >
        ⮜
        </button>
        <button
          type="button"
          className={style.pagination__left}
          onClick={this.GoLeft}
        >
        ❰
        </button>
        <input
          type="text"
          value={actualPage}
          className={style.pagination__to__certain__page}
          readOnly
        />
        <button
          type="button"
          className={style.pagination__right}
          onClick={this.GoRight}
        >
        ❱
        </button>
        <button
          type="button"
          className={style.pagination__right__to__end}
          onClick={this.GoRightToEnd}
        >
        ⮞
        </button>
      </div>
    );
  }
}

PaginationPanel.defaultProps = {
  totalPages: 1,
  scroll: () => {},
};

PaginationPanel.propTypes = {
  totalPages: PropTypes.number,
  scroll: PropTypes.func,
};

export default PaginationPanel;
