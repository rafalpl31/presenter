import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param className {string}
 * @param label {string}
 * @param onClick
 * @param type {string}
 */
export const Button = ({ className, label, onClick, type = 'button' }) =>
    <button
        className={className}
        onClick={onClick}
        type={type}
    >{label}</button>;

Button.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string
};
