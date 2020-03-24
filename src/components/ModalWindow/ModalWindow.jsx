import React from 'react';
import classNames from 'classnames';
import style from './ModalWindow.scss';

const ModalWindow = (isShowed, root, hide) => (
  <div className={classNames(style.Bord, isShowed ? style.Up : style.Down)}>
    <iframe
      className={style.Video}
      src={isShowed ? `https://www.youtube.com/embed/${root.results[0].key}` : ''}
      title="trailer"
      frameBorder="0"
      allowFullScreen
    />
    <div className={style.BotLain}>
      <button type="button" className={style.CloseButton} onClick={hide}>close</button>
    </div>
  </div>
);

export default ModalWindow;
