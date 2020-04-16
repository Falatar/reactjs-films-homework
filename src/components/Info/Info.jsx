import React from 'react';
import style from './Info.scss';

function Info() {
  return (
    <div className={style.info}>
      <button type="button" id="watch" className={style.watch}>Watch now</button>
      <button type="button" id="check" className={style.view}>View info</button>
    </div>
  );
}

export default Info;
