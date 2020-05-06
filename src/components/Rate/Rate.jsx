import React from 'react';
import PropTypes from 'prop-types';
import style from './Rate.scss';

function Rate({
  rating,
}) {
  const stars = Array(5).fill(0).map(
    (elem, index) => {
      const roof = index + 0.5;
      return (
        <span
          className={rating >= (roof) ? style.star : style.void_star}
          key={roof}
        />
      );
    },
  );
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
