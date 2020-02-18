import React from 'react';
import PropTypes from 'prop-types';
import style from './FilmData.scss';

function FilmData({
  id, name, imgURL, rating, tagList,
}) {
  return (
    <div className={style.FilmData}>
      <div className={style.control}>
        <img src={`https://image.tmdb.org/t/p/w500${imgURL}`} alt={id} />
        <div className={style.hidden}>
          <button type="button">▶</button>
        </div>
      </div>
      <div className={style.FilmText}>
        <div className={style.Name}>
          <h3>{name}</h3>
          <h2>{tagList}</h2>
        </div>
        <h1>{rating.toFixed(1)}</h1>
      </div>
    </div>
  );
}

FilmData.defaultProps = {
  id: 0,
  name: 'Can\'t find property "name"',
  imgURL: '',
  rating: 0,
  tagList: 'Can\'t find property "tagList"',
};

FilmData.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  imgURL: PropTypes.string,
  rating: PropTypes.number,
  tagList: PropTypes.string,
};

export default FilmData;
