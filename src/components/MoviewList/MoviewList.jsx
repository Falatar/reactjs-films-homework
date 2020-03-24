import React from 'react';
import classNames from 'classnames';
import style from './MoviewList.scss';
import FilmData from '../FilmData';

const MoviewList = (base, genList, genGenreString) => (
  <div className={style.List}>
    {base.results.slice(0, 12).map((item) => (
      <FilmData
        id={item.id}
        name={item.title}
        imgURL={item.backdrop_path}
        rating={item.vote_average / 2}
        tagList={genGenreString(genList.genres, item.genre_ids)}
        overview={item.overview}
        key={item.id}
      />
    ))}
  </div>
);

export const MoviewListVoid = () => (
  <div className={classNames(style.List, style.EmptyList)}>
    <span className={style.Loading}>Loading...</span>
  </div>
);

export default MoviewList;
