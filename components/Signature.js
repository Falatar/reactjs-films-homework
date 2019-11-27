import React from 'react';
import PropTypes from 'prop-types';
import "./Signature.scss";

export default class Signature extends React.Component {
    render() {
        return (
            <div className = "userName">
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}

Signature.propTypes = {
    name: PropTypes.string
}
