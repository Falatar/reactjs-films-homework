import React from 'react';
import style from './Info.scss';

function Info() {
  return (
    <div className={style.info}>
      <button type="button" id="watch" className={style.Watch}>Watch now</button>
      <button type="button" id="check" className={style.View}>View info</button>
    </div>
  );
}

export default Info;
