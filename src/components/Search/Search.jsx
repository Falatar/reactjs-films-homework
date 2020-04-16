import React from 'react';
import style from './Search.scss';

function Search() {
  return (
    <div className={style.search}>
      <form className={style.search_form}>
        <input type="text" placeholder="Search here..." className={style.search_text} />
        <button type="submit" id="push" className={style.search_button}>⌕</button>
      </form>
    </div>
  );
}

export default Search;
