import React from 'react';
import PropTypes from 'prop-types';
import style from './PaginationPanel.scss';


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
        <svg className={style.icon__left__to__end} xlinkHref="#icon__left__to__end">
          <symbol id="icon__left__to__end" viewBox="-12 1 75 75">
            <path d="M4 28v-24h4v11l10-10v10l10-10v22l-10-10v10l-10-10v11z" />
          </symbol>
          <use xlinkHref="#icon__left__to__end" />
        </svg>
      </button>
      <button
        type="button"
        className={style.pagination__left}
        onClick={() => left(numberOfPages)}
        disabled={actualPage === 1}
      >
        <svg className={style.icon__left__to__end} xlinkHref="#icon__left">
          <symbol id="icon__left" viewBox="-14 1 75 75">
            <path d="M8 28v-24h4v11l10-10v22l-10-10v11z" />
          </symbol>
          <use xlinkHref="#icon__left" />
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
        <svg className={style.icon__right} xlinkHref="#icon__right">
          <symbol id="icon__right" viewBox="-12 1 75 75">
            <path d="M24 4v24h-4v-11l-10 10v-22l10 10v-11z" />
          </symbol>
          <use xlinkHref="#icon__right" />
        </svg>
      </button>
      <button
        type="button"
        className={style.pagination__right__to__end}
        onClick={() => finallyRight(numberOfPages)}
        disabled={actualPage === numberOfPages}
      >
        <svg className={style.icon__right__to__end} xlinkHref="#icon__right__to__end">
          <symbol id="icon__right__to__end" viewBox="-12 1 75 75">
            <path d="M28 4v24h-4v-11l-10 10v-10l-10 10v-22l10 10v-10l10 10v-11z" />
          </symbol>
          <use xlinkHref="#icon__right__to__end" />
        </svg>
      </button>
    </div>
  );
}

PaginationPanel.defaultProps = {
  totalFilms: 1,
  actualPage: 1,
  left: () => { },
  right: () => { },
  finallyLeft: () => { },
  finallyRight: () => { },
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
