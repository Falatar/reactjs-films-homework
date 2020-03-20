import React from 'react';
import style from './Search.scss';

function Search() {
  return (
    <div className={style.Search}>
      <form className={style.SearchForm}>
        <input type="text" placeholder="Search here..." className={style.SearchText} />
        <button type="submit" id="push" className={style.SearchButton}>⌕</button>
      </form>
    </div>
  );
}

export default Search;
