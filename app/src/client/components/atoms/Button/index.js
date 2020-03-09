// @flow
import React, { memo } from 'react';

type Props = {
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
const NonMemoButton = ({ className, label, onClick, type = 'button' } : Props) =>
    <button
        className={className}
        onClick={onClick}
        type={type}
    >{label}</button>;

export const Button = memo(NonMemoButton);
