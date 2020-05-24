import React from 'react';
import PropTypes from 'prop-types';
import style from './FilmBlockFrontSide.scss';
import FilmDescription from '../FilmDescription';

function FilmBlockFrontSide({
  id, name, tagList, rating, callModal, switchMode, poster, checkImgSizes, setDefaultImg,
}) {
  return (
    <div className={style.film__block}>
      <div className={style.control}>
        <img
          className={style.wall}
          src={poster}
          alt={id}
          onLoad={checkImgSizes}
          onError={setDefaultImg}
        />
        <div className={style.hidden}>
          <button type="button" className={style.play} onClick={callModal}>
            <svg className={style.icon} xlinkHref="#icon-play3">
              <symbol id="icon-play3" viewBox="-8 -5 50 50">
                <path d="M6 4l20 12-20 12z" />
              </symbol>
              <use xlinkHref="#icon-play3" />
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
  callModal: () => {},
  switchMode: () => {},
  checkImgSizes: () => {},
  setDefaultImg: () => {},
};

FilmBlockFrontSide.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  poster: PropTypes.string,
  rating: PropTypes.number,
  tagList: PropTypes.string,
  callModal: PropTypes.func,
  switchMode: PropTypes.func,
  checkImgSizes: PropTypes.func,
  setDefaultImg: PropTypes.func,
};

export default FilmBlockFrontSide;
