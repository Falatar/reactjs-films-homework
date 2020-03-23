import React from 'react';
import classNames from 'classnames';
import style from './ModalWindow.scss';

const ModalWindow = (isShowed, root, hide) => (
  <div className={classNames(style.Bord, isShowed ? style.Up : style.Down)}>
    <iframe src={isShowed ? `https://www.youtube.com/watch?v=${root.results[0].key}` : ''} title="trailer" />
    <div className={style.BotLain}>
      <button type="button" className={style.CloseButton} onClick={hide}>close</button>
    </div>
  </div>
);

export default ModalWindow;
