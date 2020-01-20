import React from 'react';
import PropTypes from 'prop-types';
import style from './Film.scss';

function Film({
  name, genrePtime, rating,
}) {
  return (
    <div className={style.film}>
      <big>{name}</big>
      <h1>{genrePtime}</h1>
      <h1>{rating}</h1>
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
