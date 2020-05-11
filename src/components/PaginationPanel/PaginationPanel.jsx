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
        ⮜
      </button>
      <button
        type="button"
        className={style.pagination__left}
        onClick={() => left(numberOfPages)}
        disabled={actualPage === 1}
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
        onClick={() => right(numberOfPages)}
        disabled={actualPage === numberOfPages}
      >
        ❱
      </button>
      <button
        type="button"
        className={style.pagination__right__to__end}
        onClick={() => finallyRight(numberOfPages)}
        disabled={actualPage === numberOfPages}
      >
        ⮞
      </button>
    </div>
  );
}

PaginationPanel.defaultProps = {
  totalFilms: 1,
  actualPage: 1,
  left: () => {},
  right: () => {},
  finallyLeft: () => {},
  finallyRight: () => {},
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
