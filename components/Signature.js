import React from 'react';
import PropTypes from 'prop-types';
import "./Signature.scss";

class Signature extends React.Component {
    render() {
        <div className = "userName">
            <h3>{this.props.name}</h3>
        </div>
    }
}

Signature.propTypes = {
    name: PropTypes.string
}

export default Signature;
