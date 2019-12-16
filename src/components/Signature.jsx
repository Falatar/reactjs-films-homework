import React from 'react';
import PropTypes from 'prop-types';
import style from './Signature.scss';

function Signature({ name }) {
  return (
    <div className={style.userName}>
      <h3>{name}</h3>
    </div>
  );
}

Signature.defaultProps = {
  name: 'Can\'t find property "name"',
};

Signature.propTypes = {
  name: PropTypes.string,
};

export default Signature;
