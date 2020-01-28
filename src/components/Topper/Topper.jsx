import React from 'react';
import style from './Topper.scss';
import Search from '../Search/Search';
import Film from '../Film/Film';
import Info from '../Info/Info';

function Topper() {
  const text = 'Adventure Drama Family Fantasy | 1h 46m';
  return (
    <div className={style.topper} id="space">
      <div className={style.searchLine}>
        <big>FILMS</big>
        <Search />
      </div>
      <div className={style.filmData}>
        <Film name="THE JUNGLE BOOK" genrePtime={text} rating={4.8} />
        <Info />
      </div>
    </div>
  );
}

export default Topper;
