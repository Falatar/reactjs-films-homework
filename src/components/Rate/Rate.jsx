import React from 'react';
import PropTypes from 'prop-types';
import style from './Rate.scss';

function Rate({
  rating,
}) {
  let rt = rating.toFixed();
  const stars = Array(5).fill(0).map(() => {
    const elem = <span className={rt > 0 ? style.star : style.voidStar} key={rt} />;
    rt -= 1;
    return elem;
  });
  return (
    <div className={style.rate}>
      {stars}
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
