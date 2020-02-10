import React from 'react';
import PropTypes from 'prop-types';
import style from './FilmData.scss';

function FilmData({
  name, imgURL, rating, tagList,
}) {
  return (
    <div className={style.FilmData}>
      <img src={imgURL} alt="" />
      <div className={style.FilmText}>
        <div className={style.Name}>
          <h3>{name}</h3>
          <h2>{tagList}</h2>
        </div>
        <h1>{rating}</h1>
      </div>
    </div>
  );
}

FilmData.defaultProps = {
  name: 'Can\'t find property "name"',
  imgURL: '',
  rating: 0,
  tagList: 'Can\'t find property "tagList"',
};

FilmData.propTypes = {
  name: PropTypes.string,
  imgURL: PropTypes.string,
  rating: PropTypes.number,
  tagList: PropTypes.string,
};

export default FilmData;
