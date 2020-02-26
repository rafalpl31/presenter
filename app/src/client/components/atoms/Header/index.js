// @flow
import React from 'react';

type HeaderType = {
    className?: string,
    title: string
};

/**
 * @param className {string}
 * @param title {string}
 */
export const Header = ({ className, title } : HeaderType) => {
    const headerProps = className
        ? { className }
        : {};

    return (
        <h2 {...headerProps}>{title}</h2>
    );
};
