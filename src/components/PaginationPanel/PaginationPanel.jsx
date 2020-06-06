import React from 'react';
import PropTypes from 'prop-types';
import style from './PaginationPanel.scss';
import first from '../../static/first.svg';
import previous from '../../static/previous.svg';
import next from '../../static/next.svg';
import last from '../../static/last.svg';

function PaginationPanel({
  actualPage,
  totalFilms,
  left,
  right,
  finallyLeft,
  finallyRight,
}) {
  const filmsOnPage = 12;
  const numberOfPages = (totalFilms / filmsOnPage).toFixed(0);
  return (
    <div className={style.pagination__panel}>
      <button
        type="button"
        className={style.pagination__left__to__end}
        onClick={finallyLeft}
        disabled={actualPage === 1}
      >
        <svg className={style.svg}>
          <use xlinkHref={first} />
        </svg>
      </button>
      <button
        type="button"
        className={style.pagination__left}
        onClick={() => left(numberOfPages)}
        disabled={actualPage === 1}
      >
        <svg className={style.svg}>
          <use xlinkHref={previous} />
        </svg>
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
        onClick={() => right(numberOfPages)}
        disabled={actualPage === numberOfPages}
      >
        <svg className={style.svg}>
          <use xlinkHref={next} />
        </svg>
      </button>
      <button
        type="button"
        className={style.pagination__right__to__end}
        onClick={() => finallyRight(numberOfPages)}
        disabled={actualPage === numberOfPages}
      >
        <svg className={style.svg}>
          <use xlinkHref={last} />
        </svg>
      </button>
    </div>
  );
}

PaginationPanel.defaultProps = {
  totalFilms: 1,
  actualPage: 1,
  left: () => 'can\'t find left function',
  right: () => 'can\'t find right function',
  finallyLeft: () => 'can\'t find finallyLeft function',
  finallyRight: () => 'can\'t find finallyRight function',
};

PaginationPanel.propTypes = {
  totalFilms: PropTypes.number,
  actualPage: PropTypes.number,
  left: PropTypes.func,
  right: PropTypes.func,
  finallyLeft: PropTypes.func,
  finallyRight: PropTypes.func,
};

export default PaginationPanel;
