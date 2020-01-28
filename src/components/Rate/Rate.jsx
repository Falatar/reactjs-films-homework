import React from 'react';
import PropTypes from 'prop-types';
import style from './Rate.scss';

function Rate({
  rating,
}) {
  return (
    <div className={style.rate}>
      <span className={rating > 0.5 ? style.star : style.voidStar} />
      <span className={rating > 1.5 ? style.star : style.voidStar} />
      <span className={rating > 2.5 ? style.star : style.voidStar} />
      <span className={rating > 3.5 ? style.star : style.voidStar} />
      <span className={rating > 4.5 ? style.star : style.voidStar} />
    </div>
  );
}

Rate.defaultProps = {
  rating: 0.0,
};

Rate.propTypes = {
  rating: PropTypes.number,
};

export default Rate;
