import React from 'react';
import PropTypes from 'prop-types';
import './Signature.scss';

function Signature({ name }) {
  return (
    <div className="userName">
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
