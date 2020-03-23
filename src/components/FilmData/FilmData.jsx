import React from 'react';
import classNames from 'classnames';
import style from './FilmData.scss';

const FilmData = (imgURL, id, name, tagList, rating, callModal, switchMode) => (
  <div className={style.FilmData}>
    <div className={style.control}>
      <img className={style.Wall} src={`https://image.tmdb.org/t/p/w500${imgURL}`} alt={id} />
      <div className={style.hidden}>
        <button type="button" className={style.Play} onClick={callModal}>▶</button>
        <p className={style.WatchNow}>Watch Now</p>
        <button type="button" className={style.Info} onClick={switchMode}>View Info</button>
      </div>
    </div>
    <div className={style.FilmText}>
      <div className={style.Name}>
        <h3 className={style.NameText}>{name}</h3>
        <h2 className={style.TagsText}>{tagList}</h2>
      </div>
      <h1 className={style.RateText}>{rating.toFixed(1)}</h1>
    </div>
  </div>
);

export const FilmDataDetails = (
  imgURL, name, tagList, rating, overview, callModal, switchMode,
) => (
  <div
    className={classNames(style.FilmData, style.Dark)}
    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${imgURL})` }}
  >
    <button type="button" className={style.Close} onClick={switchMode}>✕</button>
    <div className={style.DetailsFilmText}>
      <div className={style.DetailsName}>
        <h3 className={style.DetailsNameText}>{name}</h3>
        <h2 className={style.DetailsTagsText}>{tagList}</h2>
      </div>
      <h1 className={style.DetailsRateText}>{rating.toFixed(1)}</h1>
    </div>
    <p className={style.Overview}>{overview}</p>
    <button type="button" className={style.DetailsPlay} onClick={callModal}>Watch Now</button>
  </div>
);

export default FilmData;
