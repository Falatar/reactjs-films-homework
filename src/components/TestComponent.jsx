
import React from 'react';
import PropTypes from 'prop-types';
import style from './TestComponent.scss';

function TestComponent({ x, y, z }) {
  return (
    <div className={style.math}>
      <u>
        `X =
        {x}
`
        <br />
      </u>
      <u>
        `Y =
        {y}
`
        <br />
      </u>
      <u>
        `Z =
        {z}
`
        <br />
      </u>
      <h3>
        `(X + Y) / Z =
        {(x + y) / z}
`
      </h3>
    </div>
  );
}

TestComponent.defaultProps = {
  x: 0,
  y: 0,
  z: 0,
};

TestComponent.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  z: PropTypes.number,
};

export default TestComponent;
