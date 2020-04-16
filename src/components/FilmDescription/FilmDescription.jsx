import React from 'react';
import PropTypes from 'prop-types';
import style from './FilmDescription.scss';

function FilmDescription({
  name, tagList, rating, mode,
}) {
  return (
    <div className={mode ? style.description : style.description_alter}>
      <div className={mode ? style.title : style.title_alter}>
        <h3 className={mode ? style.name : style.name_alter}>{name}</h3>
        <h2 className={mode ? style.tags : style.tags_alter}>{tagList}</h2>
      </div>
      <h1 className={mode ? style.rate : style.rate_alter}>{rating.toFixed(1)}</h1>
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
