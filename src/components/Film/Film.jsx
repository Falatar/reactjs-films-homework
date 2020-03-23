import React from 'react';
import PropTypes from 'prop-types';
import style from './Film.scss';
import Rate from '../Rate';

function Film({
  name, genrePtime, rating,
}) {
  return (
    <div className={style.Film}>
      <big className={style.Name}>{name}</big>
      <h1 className={style.Genres}>{genrePtime}</h1>
      <div className={style.RatePanel}>
        <Rate rating={rating} />
        <h1 className={style.Rate}>{rating.toFixed(1)}</h1>
      </div>
    </div>
  );
}

Film.defaultProps = {
  name: 'Can\'t find property "name"',
  genrePtime: ['unknown'],
  rating: 0,
};

Film.propTypes = {
  name: PropTypes.string,
  genrePtime: PropTypes.string,
  rating: PropTypes.number,
};

export default Film;
