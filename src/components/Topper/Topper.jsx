import React from 'react';
import style from './Topper.scss';
import Search from '../Search';
import Film from '../Film';
import Info from '../Info';

const Topper = (latestFilm, genList, genGenreString) => (
  <div
    className={style.topper}
    id="space"
    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${latestFilm.results[0].poster_path})` }}
  >
    <div className={style.searchLine}>
      <big className={style.Title}>FILMS</big>
      <Search />
    </div>
    <div className={style.filmData}>
      <Film
        name={latestFilm.results[0].title}
        genrePtime={genGenreString(genList.genres, latestFilm.results[0].genre_ids)}
        rating={latestFilm.results[0].vote_average / 2}
      />
      <Info />
    </div>
  </div>
);

export const TopperVoid = () => (
  <div className={style.List}>
    <span>Cannot download latest film...</span>
  </div>
);

export default Topper;
