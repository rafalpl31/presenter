// @flow
import React, { memo } from 'react';

type Props = {
    className?: string,
    title: string
};

/**
 * @param className {string}
 * @param title {string}
 */
export const Header = memo(({ className, title } : Props) => {
    const headerProps = className
        ? { className }
        : {};

    return (
        <h2 {...headerProps}>{title}</h2>
    );
});
