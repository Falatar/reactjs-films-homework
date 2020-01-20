import React from 'react';
import style from './Info.scss';

function Info() {
  return (
    <div className={style.info}>
      <button type="button" id="watch">Watch now</button>
      <button type="button" id="check">View info</button>
    </div>
  );
}

export default Info;
