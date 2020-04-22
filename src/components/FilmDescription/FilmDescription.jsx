import React from 'react';
import PropTypes from 'prop-types';
import style from './FilmDescription.scss';
import styleAlter from './FilmDescriptionAlter.scss';

function FilmDescription({
  name, tagList, rating, mode,
}) {
  const scss = mode ? style : styleAlter;
  return (
    <div className={scss.description}>
      <div className={scss.title}>
        <h3 className={scss.name}>{name}</h3>
        <h2 className={scss.tags}>{tagList}</h2>
      </div>
      <h1 className={scss.rate}>{rating.toFixed(1)}</h1>
    </div>
  );
}

FilmDescription.defaultProps = {
  name: 'Can\'t find property "name"',
  tagList: ['unknown'],
  rating: 0,
  mode: true,
};

FilmDescription.propTypes = {
  name: PropTypes.string,
  tagList: PropTypes.string,
  rating: PropTypes.number,
  mode: PropTypes.bool,
};

export default FilmDescription;
