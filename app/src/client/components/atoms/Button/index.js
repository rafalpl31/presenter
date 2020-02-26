// @flow
import React from 'react';

type ButtonType = {
    className?: string,
    label: string,
    onClick?: Function,
    type?: string
};

/**
 * @param className {string}
 * @param label {string}
 * @param onClick
 * @param type {string}
 */
export const Button = ({ className, label, onClick, type = 'button' } : ButtonType) =>
    <button
        className={className}
        onClick={onClick}
        type={type}
    >{label}</button>;
