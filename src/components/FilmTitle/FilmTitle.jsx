import React from 'react';
import PropTypes from 'prop-types';
import style from './FilmTitle.scss';
import Rate from '../Rate';

function FilmTitle({
  name, genrePtime, rating,
}) {
  return (
    <div className={style.film}>
      <big className={style.name}>{name}</big>
      <h1 className={style.genres}>{genrePtime}</h1>
      <div className={style.rate__panel}>
        <Rate rating={rating} />
        <h1 className={style.rate}>{rating}</h1>
      </div>
    </div>
  );
}

FilmTitle.defaultProps = {
  name: 'Can\'t find property "name"',
  genrePtime: ['unknown'],
  rating: '',
};

FilmTitle.propTypes = {
  name: PropTypes.string,
  genrePtime: PropTypes.string,
  rating: PropTypes.string,
};

export default FilmTitle;
