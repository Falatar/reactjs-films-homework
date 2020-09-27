import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
  activeMode,
  activeGenre,
  activeView,
  searchStr,
}) {
  const filmsOnPage = 12;
  const numberOfPages = parseInt((totalFilms / filmsOnPage).toFixed(0), 10);
  return (
    <div className={style.pagination__panel}>
      <button
        type="button"
        className={style.pagination__left__to__end}
        onClick={finallyLeft}
        disabled={actualPage === 1}
      >
        <Link
          to={!searchStr.length
            ? `/1/${activeView}/${activeMode}${activeGenre !== 0 ? `/${activeGenre}` : ''}`
            : `/search/${searchStr}/1/${activeView}`}
          className={style.link}
        >
          <svg className={style.svg}>
            <use xlinkHref={first} />
          </svg>
        </Link>
      </button>
      <button
        type="button"
        className={style.pagination__left}
        onClick={() => left(numberOfPages)}
        disabled={actualPage === 1}
      >
        <Link
          to={!searchStr.length
            ? `/${actualPage - 1 < 1 ? 1 : actualPage - 1}/${activeView}/${activeMode}${activeGenre !== 0 ? `/${activeGenre}` : ''}`
            : `/search/${searchStr}/${actualPage - 1 < 1 ? 1 : actualPage - 1}/${activeView}`}
          className={style.link}
        >
          <svg className={style.svg}>
            <use xlinkHref={previous} />
          </svg>
        </Link>
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
        <Link
          to={!searchStr.length
            ? `/${actualPage + 1 > numberOfPages ? numberOfPages : actualPage + 1}/${activeView}/${activeMode}${activeGenre !== 0 ? `/${activeGenre}` : ''}`
            : `/search/${searchStr}/${actualPage + 1 > numberOfPages ? numberOfPages : actualPage + 1}/${activeView}`}
          className={style.link}
        >
          <svg className={style.svg}>
            <use xlinkHref={next} />
          </svg>
        </Link>
      </button>
      <button
        type="button"
        className={style.pagination__right__to__end}
        onClick={() => finallyRight(numberOfPages)}
        disabled={actualPage === numberOfPages}
      >
        <Link
          to={!searchStr.length
            ? `/${numberOfPages}/${activeView}/${activeMode}${activeGenre !== 0 ? `/${activeGenre}` : ''}`
            : `/search/${searchStr}/${numberOfPages}/${activeView}`}
          className={style.link}
        >
          <svg className={style.svg}>
            <use xlinkHref={last} />
          </svg>
        </Link>
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
  activeMode: '',
  activeGenre: '',
  activeView: '',
  searchStr: '',
};

PaginationPanel.propTypes = {
  totalFilms: PropTypes.number,
  actualPage: PropTypes.number,
  left: PropTypes.func,
  right: PropTypes.func,
  finallyLeft: PropTypes.func,
  finallyRight: PropTypes.func,
  activeMode: PropTypes.string,
  activeGenre: PropTypes.string,
  activeView: PropTypes.string,
  searchStr: PropTypes.string,
};

export default PaginationPanel;
