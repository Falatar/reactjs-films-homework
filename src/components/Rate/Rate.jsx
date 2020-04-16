import React from 'react';
import PropTypes from 'prop-types';
import style from './Rate.scss';

function Rate({
  rating,
}) {
  const stars = Array(5).fill(0).map(
    (elem, index) => (
      <span
        className={rating >= (index + 0.5) ? style.star : style.void_star}
        key={rating}
      />
    ),
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
