import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './FilmBlockBackSide.scss';
import FilmDescription from '../FilmDescription';

function FilmBlockBackSide({
  name, tagList, rating, callModal, switchMode, poster, overview,
}) {
  return (
    <div
      className={classNames(style.film__block, style.dark)}
      style={{ backgroundImage: `url(${poster})` }}
    >
      <button type="button" className={style.close} onClick={switchMode}>✕</button>
      <FilmDescription
        name={name}
        tagList={tagList}
        rating={rating}
        mode={false}
      />
      <p className={style.overview}>{overview}</p>
      <button type="button" className={style.details_play} onClick={callModal}>Watch Now</button>
    </div>
  );
}

FilmBlockBackSide.defaultProps = {
  name: 'Can\'t find property "name"',
  poster: '',
  rating: 0,
  tagList: 'Can\'t find property "tagList"',
  overview: 'Can\'t find property "overview"',
  callModal: () => {},
  switchMode: () => {},
};

FilmBlockBackSide.propTypes = {
  name: PropTypes.string,
  poster: PropTypes.string,
  rating: PropTypes.number,
  tagList: PropTypes.string,
  overview: PropTypes.string,
  callModal: PropTypes.func,
  switchMode: PropTypes.func,
};

export default FilmBlockBackSide;
