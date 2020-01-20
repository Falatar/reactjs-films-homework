import React from 'react';
import style from './Search.scss';

function Search() {
  return (
    <div className={style.search}>
      <form>
        <input type="text" placeholder="Search here..." />
        <button type="submit" id="push">⌕</button>
      </form>
    </div>
  );
}

export default Search;
