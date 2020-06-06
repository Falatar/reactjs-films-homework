import React from 'react';
import PropTypes from 'prop-types';
import style from './FilmBlockFrontSide.scss';
import FilmDescription from '../FilmDescription';
import play from '../../static/play.svg';

function FilmBlockFrontSide({
  id, name, tagList, rating, callModal, switchMode, poster,
}) {
  return (
    <div className={style.film__block}>
      <div className={style.control}>
        <img
          className={style.wall}
          src={poster}
          alt={id}
        />
        <div className={style.hidden}>
          <button type="button" className={style.play} onClick={callModal}>
            <svg className={style.svg}>
              <use xlinkHref={play} />
            </svg>
          </button>
          <p className={style.watch__now}>Watch Now</p>
          <button type="button" className={style.info} onClick={switchMode}>View Info</button>
        </div>
      </div>
      <FilmDescription
        name={name}
        tagList={tagList}
        rating={rating}
        mode
      />
    </div>
  );
}

FilmBlockFrontSide.defaultProps = {
  id: 0,
  name: 'Can\'t find property "name"',
  poster: '',
  rating: 0,
  tagList: 'Can\'t find property "tagList"',
  callModal: () => 'can\'t find callModal function',
  switchMode: () => 'can\'t find switchMode function',
};

FilmBlockFrontSide.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  poster: PropTypes.string,
  rating: PropTypes.number,
  tagList: PropTypes.string,
  callModal: PropTypes.func,
  switchMode: PropTypes.func,
};

export default FilmBlockFrontSide;
