import React from 'react';
import style from './MoviewList.scss';
import FilmData from '../FilmData';

const MoviewList = (base, genList, genGenreString) => (
  <div className={style.List}>
    {base.results.slice(0, 12).map((item) => (
      <FilmData
        id={item.id}
        name={item.title}
        imgURL={item.poster_path}
        rating={item.vote_average / 2}
        tagList={genGenreString(genList.genres, item.genre_ids)}
        overview={item.overview}
        key={item.id}
      />
    ))}
  </div>
);

export const MoviewListVoid = () => (
  <div className={style.List}>
    <span>Cannot download film list...</span>
  </div>
);

export default MoviewList;
